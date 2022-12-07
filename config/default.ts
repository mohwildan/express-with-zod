export default {
  port: 1337,
  dbUri: "mongodb://localhost:27017/authv4",
  saltWorkFactor: 10,
  accesTokenTtl: "15m",
  refreshTokenTtl: "1y",
  publicKey: `-----BEGIN PUBLIC KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgEe2Ms1k2hjPUWGrFt9Gpp1uVEY/
nWqrhOUAk7w9SJWKrddTQqhLU4YbzdEb/tBtEglt7DidWWpUyrG0eSIq/8jlvV2g
g84ipZ7qPdq2ScM6JJDLsDFyVP07iQyiiR9dnpLmOoKmzj2hhWleqBM6lFvOi4bB
rCRk4xhqll7+0u+jAgMBAAE=
-----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICWgIBAAKBgEe2Ms1k2hjPUWGrFt9Gpp1uVEY/nWqrhOUAk7w9SJWKrddTQqhL
U4YbzdEb/tBtEglt7DidWWpUyrG0eSIq/8jlvV2gg84ipZ7qPdq2ScM6JJDLsDFy
VP07iQyiiR9dnpLmOoKmzj2hhWleqBM6lFvOi4bBrCRk4xhqll7+0u+jAgMBAAEC
gYACa+eZQe+PaOjBmIpkLbmQlVopKRrCsFoDdZqHf7ZEvnMSU1Br6GdAnw27Iuve
0+AJC3oviziqu4RArextN/B9KgOVuxnIziHqXXPzZnlqFKAJ4hr16aWiuFBA1Bxx
rar+wC+HFnYrvJqWVPX4CKDyquSQMqruHWvjRxNSyrFycQJBAI4p0/CTPo1zQ4IK
DQ+HbE6sjrWredWB93eTSd2N0QnciuOOKZxyc5+2Dlb9jSDZanal7BspPO678VZO
eMs7WzsCQQCBIm6njRY+eA35dcIIwvgsWfz6vGpEnNd/09mhyIv4wWeKkKssr4S9
ow67vsS63+0U5DSYCVl7PheVFDShdea5AkBVKKU2pV2BKhy0VwT/2mV8s01Bchin
VxVAYdCLkRo5SA1CxrQSbVTpxQrN/VB+7v4hWL8YfhlsANVOl+8v/rxlAkAjeCKu
sOkINY+ZEog+QddKz1jWQgRqXi4u9TCU6HHR3MWk4MGzn241bGEynl6I+dKz506u
5/qFCHQPxaIDK1A5AkBGaTBzUosRIXzxqzuVdRDW3yzMXN/x4NFdCqAsTzgJMEdf
suv80Rudi11bKPD9Hk/72uSQXiUR+tc66+oFKBct
-----END RSA PRIVATE KEY-----`,
};
