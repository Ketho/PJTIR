See [IP Plan](https://github.com/Ketho/PJTIR/issues/1)

# ping
## HQ
- HQ-PC1    `ping 2a02:a420:b:1a1::10` (vlan10)
- HQ-PC10   `ping 2a02:a420:b:1a3::10` (vlan100)
- Server1   `ping 2a02:a420:b:1a2::10` (vlan20)
- HQ-R1 lo0 `ping 2a02:a420:b:110::f:0`
- HQ-R2 lo0 `ping 2a02:a420:b:111::f:0`
## ISP
- ISP lo0   `ping 2a02:a420:b:300::f:0`
## BR
- BR-R1 lo0 `ping 2a02:a420:b:210::f:0`
- BR-PC1    `ping 2a02:a420:b:2a1::10` (vlan10)
- BR-PC2    `ping 2a02:a420:b:2a3::10` (vlan100)

# ssh
- HQ-DLS1   `ssh -l cisco 2a02:a420:b:120::f:0`
- HQ-R1     `ssh -l cisco 2a02:a420:b:110::f:0`
- ISP       `ssh -l cisco 2a02:a420:b:300::f:0 -oKexAlgorithms=+diffie-hellman-group1-sha1 -c aes256-cbc`
- BR-R1     `ssh -l cisco 2a02:a420:b:210::f:0 -oKexAlgorithms=+diffie-hellman-group1-sha1 -c aes256-cbc`
