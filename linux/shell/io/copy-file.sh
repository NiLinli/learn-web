#
# copy a file
#
if [ "$#" -ne 2 ]; then
  echo "Usage:copyfile from to"
  exit 1
fi

from="$1"
to="$2"

#
# Check if the destination file is a directory
#
if [ -d "$to" ]; then
  # basename 取整个文件路径的文件名
  to="$to/$(basename $from)"
  echo $to
fi

#
# Check the destination file is already exits
#
if [ -e "$to" ]; then
  echo "$to already exits; overwrite(yes/no)? "
  read answer
  
  if [ "$answer" != 'yes' ]; then
    echo "Copy not performed"
    exit 1
  fi
fi

#
# Either the destination file is not exits or overwrite the file
#
cp $from $to    # process the copy
