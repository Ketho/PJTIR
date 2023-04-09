## BR-ALS1
model: WS-C2960+24TC-L
```lua
en
conf t
host BR-ALS1
no ip domain-lookup
banner motd $ forbidden access for strangers $

!! portchannel to DLS1
int range fa0/1-2
    channel-group 1 mode active
int port-channel 1
    switchport mode trunk

!! access ports
int fa0/7
    switchport access vlan 10
int fa0/8
    switchport access vlan 20
int fa0/9
    switchport access vlan 100
int fa0/10
    switchport access vlan 110
int fa0/11
    switchport access vlan 200
int fa0/12
    switchport access vlan 300

!! port security
int range fa0/7-12
    switchport mode access
    switchport port-security
    switchport port-security mac-address sticky
    switchport port-security violation shutdown

!! shutdown unused ports
int range fa0/13-24
    shutdown

!! vtp
vtp mode client
vtp domain rp6_br_vtp
vtp password banaan123
end


!! ssh apart instellen
conf t
int vlan 1
    ipv6 addr 2a02:a420:b:2a0::2/64
    no sh
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
