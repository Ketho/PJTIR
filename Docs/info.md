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

## setup router with an interface
```lua
en
conf t
host R1
no ip domain-lookup
ipv6 unicast
int g0/0/0
    ipv6 address 2000::1/64
end
```
- a PC can only get auto config when the router interface is using a prefix of /64
    - not smaller and not bigger than that

## info
```
Ethernet adapter Ethernet 2:

   Connection-specific DNS Suffix  . :
   IPv6 Address. . . . . . . . . . . : 2010::8:e3a1:6286:93b9:c104
   Temporary IPv6 Address. . . . . . : 2010::8:924:5280:c38d:efa1
   Link-local IPv6 Address . . . . . : fe80::e896:a64:e088:b4f3%8
   Default Gateway . . . . . . . . . : fe80::ce70:edff:fef5:41ef%8
```
- all of these IP addresses can be pinged
    - including without the `%8`
- can also somehow ping the R1 interface

# on R2 some stuff is in the config and idk where from
```lua
*Mar 28 16:40:07.856: %PKI-4-NOCONFIGAUTOSAVE: Configuration was modified.  Issue "write memory" to save new IOS PKI configurationinterface GigabitEthernet0/0/0

interface GigabitEthernet0/0/0
    no ip address
    negotiation auto
    ipv6 address 2001:DB8:ACAD:1::2/64
    ipv6 address autoconfig
    ipv6 enable
    ipv6 nd autoconfig default-route
    ipv6 dhcp client request vendor
interface GigabitEthernet0/0/1
    no ip address
    negotiation auto
    ipv6 address 2001:DB8:ACAD:2::1/64
```
- had to change config and then `write memory`
