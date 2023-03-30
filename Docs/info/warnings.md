## R1
- some warning about duplicate router id
```lua
*Mar 24 14:05:27.150: %OSPFv3-4-DUP_RTRID_NBR: OSPFv3-1-IPv6 detected duplicate router-id 10.1.1.1 from FE80::245:1DFF:FEDF:351 on interface GigabitEthernet0/0/0
```

## ISP
- got some warning about subnet router anycast on loopback
```lua
ISP(config-if)#int lo0
ISP(config-if)#    ipv6 addr 2a02:a420:b:300::1:0/112
% 2A02:A420:B:300::1:0/112 should not be configured on Loopback0, a subnet router anycast
```
