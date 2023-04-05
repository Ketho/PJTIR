# ping
```py
## routing
- HQ-R1   lo0   ping 2a02:a420:b:110::f:0
- HQ-R2   lo0   ping 2a02:a420:b:111::f:0
- HQ-DLS1 lo0   ping 2a02:a420:b:120::f:0
- HQ-DLS2 lo0   ping 2a02:a420:b:121::f:0

- BR-R1   lo0   ping 2a02:a420:b:210::f:0
- BR-DLS1 lo0   ping 2a02:a420:b:210::f:0
```

```py
## hosts
- HQ-PC10   ping 2a02:a420:b:1a1::10 (vlan10)
- Server1   ping 2a02:a420:b:1a2::10 (vlan20)
- HQ-PC11   ping 2a02:a420:b:1a3::10 (vlan100)

- BR-PC1    ping 2a02:a420:b:2a1::10 (vlan10)
- BR-PC2    ping 2a02:a420:b:2a3::10 (vlan100)
```

# ssh
```py
- HQ-R1     ssh -l cisco 2a02:a420:b:110::f:0
- HQ-R2     ssh -l cisco 2a02:a420:b:111::f:0
- HQ-DLS1   ssh -l cisco 2a02:a420:b:120::f:0
- HQ-DLS2   ssh -l cisco 2a02:a420:b:121::f:0
- HQ-ALS1   ssh -l cisco 2a02:a420:b:1a0::2
- HQ-ALS2   ssh -l cisco 2a02:a420:b:1a0::3

- BR-R1     ssh -l cisco 2a02:a420:b:210::f:0
- BR-DLS1   ssh -l cisco 2a02:a420:b:220::f:0 -oKexAlgorithms=+diffie-hellman-group1-sha1 -c aes256-cbc
- BR-ALS1   ssh -l cisco 2a02:a420:b:2a0::2
```
