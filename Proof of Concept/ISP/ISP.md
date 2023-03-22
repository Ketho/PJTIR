## ISP
model: ISR4331-SEC/K9
```lua
en
conf t
host ISP
no ip domain-lookup
ipv6 unicast
int s0/1/0
    ipv6 addr 2a02:a420:b:110::1:1/127
    ipv6 ospf 1 area 0
    no sh
int s0/1/1
    ipv6 addr 2a02:a420:b:111::1:1/127
    ipv6 ospf 1 area 0
    no sh
int s0/2/0
    ipv6 addr 2a02:a420:b:210::1:1/127
    ipv6 ospf 1 area 0
    no sh
int lo0
    ipv6 addr 2a02:a420:b:300::1:0/112
    ipv6 ospf 1 area 0
ipv6 router ospf 1
    router-id 30.1.1.1
end
!! alleen voor de packet tracer
copy running-config startup-config
```
