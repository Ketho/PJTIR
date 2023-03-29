# IP Plan
## Netwerk
- HQ: `2a02:a420:b:100::/56`
- BR: `2a02:a420:b:200::/56`

### ISP
```py
- ISP
    - lo0       2a02:a420:b:300::f:0/112
    - s0/1/0    2a02:a420:b:110::1:1/127 (HQ R1)
    - s0/1/1    2a02:a420:b:111::1:1/127 (HQ R2)
    - s0/2/1    2a02:a420:b:210::1:1/127 (BR R1)
```

### HQ
```py
- HQ-R1
    - lo0       2a02:a420:b:110::f:0/112
    - s0/1/0    2a02:a420:b:110::1:0/127  (ISP)
    - g0/0/0    2a02:a420:b:110::10:0/127 (DLS1) [DHCP]
    - g0/0/1    2a02:a420:b:110::11:0/127 (DLS2)
    - tunnel1   2a02:a420:b:1ff::10:0/127 (BR-R1)
- HQ-R2
    - lo0       2a02:a420:b:111::f:0/112
    - s0/1/0    2a02:a420:b:111::1:0/127  (ISP)
    - g0/0/0    2a02:a420:b:111::10:0/127 (DLS1)
    - g0/0/1    2a02:a420:b:111::11:0/127 (DLS2)
    - tunnel1   2a02:a420:b:1ff::11:0/127 (BR-R1)
- HQ-DLS1
    - lo0       2a02:a420:b:120::f:0/112
    - g1/0/7    2a02:a420:b:110::10:1/127 (R1)
    - g1/0/8    2a02:a420:b:111::11:1/127 (R2)
    - g1/0/3-4  2a02:a420:b:120::10:0/127 (DLS2, L3 port-channel)
    - vlan10    2a02:a420:b:1a1::0/64 (ict)
    - vlan20    2a02:a420:b:1a2::0/64 (servers)
    - vlan100   2a02:a420:b:1a3::0/64 (directie)
    - vlan110   2a02:a420:b:1a4::0/64 (administratie)
    - vlan200   2a02:a420:b:1a5::0/64 (productie)
    - vlan300   2a02:a420:b:1a6::0/64 (wifi_gast)
- HQ-DLS2
    - lo0       2a02:a420:b:121::f:0/112
    - g1/0/7    2a02:a420:b:111::10:1/127 (R2)
    - g1/0/8    2a02:a420:b:110::11:1/127 (R1)
    - g1/0/3-4  2a02:a420:b:120::10:1/127 (DLS1, L3 port-channel)
    - vlan1     2a02:a420:b:1b1::1/64 (ssh ALS1)
    - vlan10    2a02:a420:b:1a1::1/64
    - vlan20    2a02:a420:b:1a2::1/64
    - vlan100   2a02:a420:b:1a3::1/64
    - vlan110   2a02:a420:b:1a4::1/64
    - vlan200   2a02:a420:b:1a5::1/64
    - vlan300   2a02:a420:b:1a6::1/64
- HQ-ALS1
    - vlan1     2a02:a420:b:1b1::2/64 (ssh)
## hosts
- HQ-PC1        2a02:a420:b:1a1::10/64  (vlan 10)  gateway 2a02:a420:b:1a1::0
- HQ-PC2        auto
- Server1       2a02:a420:b:1a2::10/64  (vlan 20)  gateway 2a02:a420:b:1a2::0 [DNS]
- HQ-PC10       2a02:a420:b:1a3::10/64 (vlan 100)  gateway 2a02:a420:b:1a3::0
```

### BR
```py
- BR-R1
    - lo0       2a02:a420:b:210::f:0/112
    - s0/1/0    2a02:a420:b:210::1:0/127  (ISP)
    - g0/0/0    2a02:a420:b:210::10:0/127 (DLS1)
    - tunnel1   2a02:a420:b:2ff::10:1/127 (HQ-R1)
    - tunnel2   2a02:a420:b:2ff::11:1/127 (HQ-R2)
- BR-DLS1
    - lo0       2a02:a420:b:220::f:0/112
    - g1/0/7    2a02:a420:b:220::10:1/127 (R1)
    - vlan10    2a02:a420:b:2a1::0/64
    - vlan20    2a02:a420:b:2a2::0/64
    - vlan100   2a02:a420:b:2a3::0/64
    - vlan300   2a02:a420:b:2a4::0/64
## hosts
- BR-PC1        2a02:a420:b:2a1::10/64 (vlan 10)  gateway 2a02:a420:b:2a1::0
- BR-PC2        2a02:a420:b:2a3::10/64 (vlan 100) gateway 2a02:a420:b:2a3::0
```

![](https://github.com/Ketho/PJTIR/blob/master/Proof%20of%20Concept/topologie.png)

test2
asdasdasd
