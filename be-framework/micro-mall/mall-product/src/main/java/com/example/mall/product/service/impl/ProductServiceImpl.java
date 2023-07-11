package com.example.mall.service.impl;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.example.mall.service.CategoryService;
import com.example.mall.service.ProductService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.example.mall.dao.CategoryMapper;
import com.example.mall.dao.ProductMapper;
import com.example.mall.exception.MallException;
import com.example.mall.exception.MallExceptionEnum;
import com.example.mall.model.pojo.Product;
import com.example.mall.model.query.ProductCListQuery;
import com.example.mall.model.request.ProductCListReq;
import com.example.mall.model.vo.CategoryVO;

@Service
public class ProductServiceImpl implements ProductService {

  @Autowired
  ProductMapper productMapper;

  @Autowired
  CategoryService categoryService;

  @Override
  public void add(Product addProduct) {
    Product productOld = productMapper.selectByName(addProduct.getName());

    if (productOld != null) {
      throw new MallException(MallExceptionEnum.PRODUCT_NAME_EXISTED);
    }

    int count = productMapper.insertSelective(addProduct);
    if (count == 0) {
      throw new MallException(MallExceptionEnum.PRODUCT_ADD_FAILED);
    }
  }

  @Override
  public void update(Product updateProduct) {
    Product productOld = productMapper.selectByPrimaryKey(updateProduct.getId());
    if (productOld == null) {
      throw new MallException(MallExceptionEnum.PRODUCT_UPDATE_FAILED);
    }

    int count = productMapper.updateByPrimaryKeySelective(updateProduct);
    if (count == 0) {
      throw new MallException(MallExceptionEnum.PRODUCT_UPDATE_FAILED);
    }

  }

  @Override
  public void remove(Integer id) {
    Product productOld = productMapper.selectByPrimaryKey(id);
    if (productOld == null) {
      throw new MallException(MallExceptionEnum.PRODUCT_DELETE_FAILED);
    }

    int count = productMapper.deleteByPrimaryKey(id);
    if (count == 0) {
      throw new MallException(MallExceptionEnum.PRODUCT_DELETE_FAILED);
    }
  }

  @Override
  public void batchUpdateSellStatus(Integer[] ids, Integer sellStatus) {
    productMapper.batchUpdateSellStatus(ids, sellStatus);
  }

  @Override
  public PageInfo listForAdmin(Integer pageNum, Integer pageSize) {
    PageHelper.startPage(pageNum, pageSize);
    List<Product> products = productMapper.selectListForAdmin();
    PageInfo pageInfo = new PageInfo<>(products);
    return pageInfo;
  }

  @Override
  public Product detail(Integer id) {
    Product product = productMapper.selectByPrimaryKey(id);
    return product;
  }

  @Override
  public PageInfo listForC(ProductCListReq req) {

    ProductCListQuery productCListQuery = new ProductCListQuery();

    productCListQuery.setKeyword(req.getKeyword());

    if (req.getCategoryId() != null) {
      List<CategoryVO> categoryVOs = categoryService.treeCategory(req.getCategoryId());
      ArrayList<Integer> categoryIds = new ArrayList<>();
      getCategoryIds(categoryVOs, categoryIds);
      productCListQuery.setCategoryIds(categoryIds);
    }

    Integer orderBy = req.getOrderBy();

    if (orderBy != null) {
      if (orderBy == 1) {
        PageHelper.startPage(req.getPageNum(), req.getPageSize(), "price desc");
      } else if (orderBy == 2) {
        PageHelper.startPage(req.getPageNum(), req.getPageSize(), "price asc");
      }
    } else {
      PageHelper.startPage(req.getPageNum(), req.getPageSize());
    }

    List<Product> products = productMapper.selectListForC(productCListQuery);
    PageInfo pageInfo = new PageInfo<>(products);
    return pageInfo;
  }

  private void getCategoryIds(List<CategoryVO> categoryVOs, ArrayList<Integer> categoryIds) {

    for (int i = 0; i < categoryVOs.size(); i++) {
      CategoryVO categoryVO = categoryVOs.get(i);

      if (categoryVO != null) {
        categoryIds.add(categoryVO.getId());

        getCategoryIds(categoryVO.getChildCategories(), categoryIds);
      }

    }

  }

  @Override
  public void addProductByExcel(File destFile) throws IOException {
    List<Product> products = readProductsFromExcel(destFile);

    for (Product product : products) {
      Product productOld = productMapper.selectByName(product.getName());

      if (productOld != null) {
        throw new MallException(MallExceptionEnum.PRODUCT_NAME_EXISTED);
      }

      int count = productMapper.insertSelective(product);

      if (count == 0) {
        throw new MallException(MallExceptionEnum.PRODUCT_ADD_FAILED);
      }
    }
  }

  private List<Product> readProductsFromExcel(File excelFile) throws IOException {
    ArrayList<Product> products = new ArrayList<>();

    FileInputStream inputStream = new FileInputStream(excelFile);
    XSSFWorkbook workbook = new XSSFWorkbook(inputStream);  // excel
    XSSFSheet firstSheet = workbook.getSheetAt(0);  // excel 第一个 sheet

    Iterator<Row> rowIterator = firstSheet.iterator();

    while (rowIterator.hasNext()) {
      Row nextRow = rowIterator.next();
      Iterator<Cell> cellIterator = nextRow.cellIterator();

      int rowNumber = nextRow.getRowNum();

      if (rowNumber == 0) {
        continue;
      }

      Product product = new Product();

      while (cellIterator.hasNext()) {

        
        Cell nextCell = cellIterator.next();
 
        int columnIndex = nextCell.getColumnIndex();

        switch (columnIndex) {
          case 0:
            product.setName(nextCell.getStringCellValue());
            break;
          case 1:
            product.setImage(nextCell.getStringCellValue());
            break;
          case 2:
            product.setDetail(nextCell.getStringCellValue());
            break;
          case 3:
            product.setCategoryId(((Double) nextCell.getNumericCellValue()).intValue());
            break;
          case 4:
            product.setPrice(((Double) nextCell.getNumericCellValue()).intValue());
            break;
          case 5:
            product.setStock(((Double) nextCell.getNumericCellValue()).intValue());
            break;
          case 6:
            product.setStatus(((Double) nextCell.getNumericCellValue()).intValue());
            break;
          default:
            break;
        }

      }

      products.add(product);

    }

    return products;
  }

}
