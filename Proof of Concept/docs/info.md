## boot from startup-config
-- https://community.cisco.com/t5/switching/won-t-load-startup-config/td-p/771348
-- https://ipcisco.com/lesson/configuration-register/

4331
```lua
Router#sh ver
Configuration register is 0x2142
```
```lua
config-register 0x2102
```

2801 BR-R1
```lua
Configuration register is 0x142 (will be 0x2102 at next reload)
```
