# "CoralMall" "CoralGMall2"  "CoralPay" "CoralInventory" "CoralLottery"
# for i in "CoralMall" "CoralPay" "CoralInventory" 
# do
#   cd /Users/nilinli/omg/
#   git clone --bare "git@git.code.tencent.com:jmdhy/$i.git"
#   cd "./$i.git"
#   git push --mirror "git@git.tencent.com:jmdhy/standard/$i.git"
#   cd /Users/nilinli/omg/
# done



# for i in "CoralTimer" "CoralLotteryScfServer" "CoralPurchase"
# do
#   cd /Users/nilinli/omg/
#   git clone --bare "git@git.woa.com:CSIG_Tsec_P2_MSPC/Coral/$i.git"
#   cd "./$i.git"
#   git push --mirror "git@git.tencent.com:jmdhy/standard/$i.git"
#   cd /Users/nilinli/omg/
# done


# for i in "CoralMall" "CoralGMall2"  "CoralPay" "CoralInventory" "CoralLottery" "CoralTimer" "CoralLotteryScfServer" "CoralPurchase"
# do
#   cd /Users/nilinli/omg/
#   git clone --bare "git@git.tencent.com:jmdhy/standard/$i.git"
#   cd "./$i.git"
#   git push --mirror "git@git.tencent.com:jmdhy/standard/node/$i.git"
#   cd /Users/nilinli/omg/
# done

# for i in "weclient-open-platform" "open-platform-admin"
# do
#   cd /Users/nilinli/omg/
#   git clone --bare "git@git.woa.com:luckyzzhong/$i.git"
#   cd "./$i.git"
#   git push --mirror "git@git.tencent.com:weClient/open-platform/fe/$i.git"
#   cd /Users/nilinli/omg/
# done

for i in "tapisix" "privilege"
do
  cd /Users/nilinli/omg/
  git clone --bare "git@git.woa.com:markcxliu/$i.git"
  cd "./$i.git"
  git push --mirror "git@git.tencent.com:weClient/open-platform/backend/$i.git"
  cd /Users/nilinli/omg/
done

for i in "application" "api" "enterprise" "auth" "simulation" "simulation4privilege"
do
  cd /Users/nilinli/omg/
  git clone --bare "git@git.woa.com:xinjccheng/$i.git"
  cd "./$i.git"
  git push --mirror "git@git.tencent.com:weClient/open-platform/backend/$i.git"
  cd /Users/nilinli/omg/
done