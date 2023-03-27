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

## 2801 ssh
BR-R1
-- https://unix.stackexchange.com/questions/402746/ssh-unable-to-negotiate-no-matching-key-exchange-method-found
```lua
C:\Users\user>ssh -l cisco 2a02:a420:b:300::1:0
Unable to negotiate with 2a02:a420:b:300::1:0 port 22: no matching key exchange method found. Their offer: diffie-hellman-group1-sha1

C:\Users\user>ssh -l cisco 2a02:a420:b:300::1:0 -oKexAlgorithms=+diffie-hellman-group1-sha1
Unable to negotiate with 2a02:a420:b:300::1:0 port 22: no matching cipher found. Their offer: aes128-cbc,3des-cbc,aes192-cbc,aes256-cbc
```
