# remove the item
grep -v "$1" data > /tmp/data
mv /tmp/data data