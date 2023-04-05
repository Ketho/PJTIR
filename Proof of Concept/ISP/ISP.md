## ISP
model: 2801
```lua
en
conf t
host ISP
no ip domain-lookup

banner motd $ forbidden access for strangers $

ipv6 unicast

!! loopback
int lo0
    ipv6 addr 2a02:a420:b:300::f:0/112
!! to HQ-R1
int s0/3/0
    ipv6 addr 2a02:a420:b:110::1:1/127
    no sh
!! to HQ-R2
int s0/3/1
    ipv6 addr 2a02:a420:b:111::1:1/127
    no sh
!! to BR-R1
int s0/2/1
    ipv6 addr 2a02:a420:b:210::1:1/127
    no sh

end


!! ssh apart instellen
conf t
ip domain name pjtir6.net
!! handmatig 1024 invoeren
crypto key generate rsa

ip ssh version 2
service password-encryption
username cisco password cisco
username cisco privilege 15
line vty 0 4
    login local
    transport input ssh
end

!! alleen voor de packet tracer
copy running-config startup-config
```
