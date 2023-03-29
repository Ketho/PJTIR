## paste into terminal
- https://askubuntu.com/a/479252


## find serial port
- https://askubuntu.com/questions/398941/find-which-tty-device-connected-over-usb
```
ls /dev/ > dev_list_1.txt
-- Then run this after you plug it
ls /dev/ | diff --suppress-common-lines -y - dev_list_1.txt
```
- /dev/ttyACM0 (routers)
- /dev/ttyUSB1 (hot plug)

## fix putty font
- https://askubuntu.com/questions/1255916/putty-unable-to-load-font-in-ubuntu-20-04

## show dns
- https://askubuntu.com/questions/191563/how-to-view-the-dns-address-assigned-by-dhcp
