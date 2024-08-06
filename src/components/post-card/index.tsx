import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View} from 'react-native';
import {CustomText} from '../texts';
import AppColors from '../../utills/AppColors';
import {CommonStyles} from '../../utills/CommonStyles';
import {height, width} from '../../utills/Dimension';
import Button from '../button';
import Icon from 'react-native-vector-icons/Fontisto';
import Comment from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  index: number;
}
const PostCard = ({index}: Props) => {
  return (
    <View key={index} style={[styles.cardItem, CommonStyles.shadow]}>
      <Image
        style={styles.image}
        source={{
          uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFRUZGBgaGhgaHBwaHBoZGBwcGhgZGiEYHBwcIS4mHB4tIRoZJjgmKy8xNTU1HCU7QDs0Py40NTEBDAwMEA8QHhISHjQrISs0NDQ0NDY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAACAwQFAAEGB//EAEEQAAIBAgQEAwUGAQsEAwAAAAECEQAhAwQSMQUiQVFhcYEGEzKRoUJSscHR8HIUFiMzYoKSssLh8RVDU6IHNOL/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAjEQEBAAIBBAIDAQEAAAAAAAAAAQIREiExQVETYQMiMkKB/9oADAMBAAIRAxEAPwDmlWjC0SrRBa9FwhC1sLTAtbC0EALRhaMLWwtACFrYWjC0QWgiwtFppgWthaAWFotNMC1gWgAC1vRR6aLTVAuK2Fpmmt6aAVprNNOisigE6azTT9NZpoBOms008LRIlSchK4RPSmplT3p6juaL3g6VNt8LkgsHAA3vUvDw4pCZkAda0c2O1Y5Y5VtjljEpmFJfEFRXzXhSXxzS+OnfyRIxHmks1KOIaAk0/jT8kG7iks07VvSaEzT4jmGsob1lPiXNDC0YWiC0QWtmIQtEFowtEFoIAWiC0YWthaCCFogtEFogtAAFrYWmBaLTQCwtbC0wLWwtUABa3ppgWthaAWFrNNNC1sLQCtNb004JWwlLYJ01mmpK4JNMOWNTcoqY1C01uKmplCxqXh5NRvepy/JjFY/jtVIQ1kGr5UUdq0+nsKz+b6afD9qIzWLgMdlNXJC9hQLhxYGj5fofF9qlssw3EVo5Y1bPhTuaV7mOtL5T+JBXLxvQvhTtMVPaB40h3qedacJpH9ze4oTh05npGJiVHK0+MgfdjwrKRqrKOpowWjC0SrRBa69uJoLWwtGFogtMgBaILTAtbAoGgha3ppojtWBaJTsLC0QWmBa2Fp7IAWiC0xRRRRsF6awLTYogtGyJC0xFo1wzRBTU2xUlgsPKk1JwsqR1FAuG0T+dSMPCPUmscsvtvjj9NfyIHqfSiXJr3NOC+NGBWVyvtrMcfRXugP8AmgIqQH6RWnWdqnkrSI1AXFPdSKBxNGxoKMtExBpDpS3xIoCQQKU9RzmCKU+OTRobHiPUV3rTuaUzVUibWnxDSXettQMaehsOut0MVlVxLZyrTAtbUUYWtdubQQtbC0wLRBarY0ALRBaMLRBaNloAWiC0wLRBaNkALRBaILRBaNjQAtbC0wLRaaNlosLRAUYWiC0rlFSW9gUaEijCDvRog6mouWLSY5bMwEJ3qWqdhUcBO5p2G6DrNYZXbfGaGyEdKWxp65laW+MptUbaIzNQjGNOZ0HQGkO69qZBfG8KW+P4CttjDtSWxB2pk0+KaSxrbNQGmVoGoCKYYoSRTBRwyaD3ZppbtWB6qIpDYXhQnDBqYjTWFauRnaje6FZT9Nbqi2jgUYWgVDTFQ1G1cYIIaNU8a0oPhRaTRuq1iXmMcpfTqFpvEX3t4SfSt4WYLEgrBE9exsfUXqFxDOIhKOxBIXowsSftCw3puQxFcmGnfoQYB8fMXrmn5MufHflrcMeO9LBT4UaxQJheNM0Cund9sP19NrTFQd6V7sd62MLxo5UpMfRjLFbBFLOGOrVtcLs1HKi4wciskVr3J71nuj96lcqcxxNUA0RI6zSUQjZqreK8YXAJDqzQuq2na9rnw+tRldda0x12i332NbUkdqh5DM60TEVYDqGE7gHvFSA57Uj2YxPYUtyR0rRxD2oGZu1LQ22zmlM1YzHtS2c09DZWZZpWDF7+Ig1X+9xGJhoWTG0kA726WtU3M5jRDHYSe/Sq3AxNwJ7fQi3hb9zXN+TKzPu2wkuK1LUBatkVrTXXphsJahLUzTWFB2pjZBrW1bzmKqIXIJ2sPGoWW4kHZV0EapgyOgm4qbnjLryfG2bWC5g0S4x6gUBUVqBV8kcYb76spEDtW6XKnxhqmjU1zOHxd+w+RrG4867hfk34zFLej1t1INGK5JPaZzthqR/erTe02ISIRR3HMf8Aj61PODhTvaQ/0hH9kfgTVpwQ3Pkfy/OuazebbFcMwAYjYWHlUrM5koghmEswlSV3LG8C42rn3++/tvx/XTthHUxSXzSDd0H95f1rgffgyX59t2YfiLihw82gN0WLmOafKZ2rb5Ky+OO4fieCN8RfQ6vwmo549l5jWx8dJiuVwc0klvdoR0UlvnvTl4kgt/J0/H8qV/JT+OOjfj+CNg5HeAB9TS29o8EbI5/w/rXK4mLqMwB4QAPoBFYMI2k77Qyntve1LnkfCOr/AJy4cD+jefEgD0P+1B/OtBf3R9G//NcwmVY7DV4i9MXIOL6TEkST1BiDJ70udPhPTof52km2GI8WP6VU8ezhxlLsoU6IAE/fI61XnCGoAMDfYTuDtPnUniigIwHYb+Lz+dZ555WyHjhJurLh3tG+HhogRCEUDqCQB505/azEOyIvzP51zyYRJAA6D4QZ9aJkcRZv2KvlS44+l6PafG+6h9CPzom9qXj4EmekmqMZPFLRpIME3IAjqaLG4a6iWIiAeVtXoY8KOVHGelz/ADnePgQ+rD860PaV2t7sCRvJMdjVBl8vqkFwq7yVJ9BA/SrDh2XXW4Da7C8afoaMs8pBMZaf/wBVd1dHiQ2kECI1WEx5G/jU7JrOs9P3+v0qvymCpfHk31AaY6TMz9Km8PJMiYses30xf1msct2tZ0E3tEnRG8JYfkKEe0CsQq4Rk2EvaflUJ8jk1Gr37uZiF0L683Sl4Co2JyCArLBMaj1uRW1zyk2zmMtSP5xyJGHA/iP6Vg9oDv7uB3k/pVDl0JwlYEiBt3gLH40S45UaZI9KJnlRlhj4XOZ4ocRSuiAeskx52pOC+go0TB8plI9KDCwgBPgp+jUD20gx9k/+prHLK3La5jJNOmRlYSrT5EGtMlcYuIV+FiPEEimHOv8Afb/Ef1rpmbLitznHH/FZUDEEk71lc3PL224z06peHYU2wh5gYf6zTDwrB6oD6LH1FbXGWfj2jZptPWaeMU/EC3kAI38f1ro0y2SvCcL/AMYj+7+lNThODtoHlA/StNnItG8QOUkz4BqI47EfA3prJ8LWEetPiNuT49gqmYIUQAFsPFZqw4VlRikoZtJtp7r94Ede1QeN4mrMNII5V6R9jtVnwFwrnUwQQQCTuSV8f3FY/wC2m/1WbcJwxEzPT4NXoAtOHDsFBLopt9oL5ySAI/CtjNZdSAcVdUGBqHXwWua44+cDzlmZkNmCIWIOqbhh6TPQ7VtMWdqXxHi2UwiVZMMN2UMwP97RA60jKcRXGvg5PEdZ+PQgSZj4ixt538KnZDKof/sZZ8RmiXYLF5BDamVWP8KxFpNdPgIioqoNCgWVYUKO0CwFLU8DqrMtw9GHPgqhjY3n5WrMThYMBEw4HcMflAt9at2PifO1A7nxH5+Fxf0paG1SvCzNkwl8dLkj8J+dMXh6L/WFPCEZfxc1ZI9z12t2Hiarc5wlMQy+sXGzvHc7GB1FKw5S8bBy4DLKatJMQe3aa4LjbHbvuB5iu1zHs3gBWca5VWYEOx2BInvtXn+bacR/4vzqdbymzt6PT8lwzD92h0LJRPsi8qN6x+DJ/wCPB3+4Jjt51JyWKBhoCROlABtPKO/WnAr92NtxB2/Gr0W0F+C4ZMlEn+FIM9Taa2OC4X3MP1UEfWanFwL9u0VsNPUjfwpag2gvwbBP/bQn+BP0qt4xw9MNNSIim/wgA2ViJgbWropA7/SfnNc37cn+gUAn+sG8R8L9jSym5oSuf4ZiE4eM5A1HEvHYIGjyk0/JuAN9z/qJFReAYnI4PV238UUfkakcOyxxDpBIWTO02NZZd149nUNwLB/8af4RVB7TZdMuEKKqklrbTBXp612TJ4z5/wDNcT/8hGPc+WJ/o6TWtxlTyreQ4emjLLoEYmGrMPvEqL/QfKrg8Gw+qfX/AHqqwM6iHKh3UEYaifhCgpPMS2/jbfarvB4pgdcxhz2DrP0Y0prdPrqOGRSjZl4bShcKCTv7wL17C1Q8LPM7gEAdLeANWWbxw2HmGAMOSR4D3wN+1q57BxtDBomLx6GjjLKW9V6MvCMGAdHb7Ph3ioGLwZ55RhRNpUmB86vRmkVQWcCw3LX22HrQYuOpurCB2BPWN6dxG3nmZ4mQ7cg3P4+VZVdmn528zWU+GKeVdRmPaZFbSqOSe4cAzvZj08qusmuJiJKPhoT10B4g9RIG1t6a/AsEiPdnYfDC/uwp+R4WqJpChZuRdwbzpOqQSe8W7itLb4EnsJ4Y9tebcXnkGGgPgNWqKscLJqF0y7i4JLGY9Ij0iltlbcgRGtzLhrrt4sCOvasxMoXA1u5I2OplPY2UgXHlS3T1HIe0GCFzDKogQogyfsg9fOrz2cUayCPsnpP2kqm9ocMLjsFmBoiSSfhU3NXHs6nPIJsGsIvzKIuLdDbtWXlXh0nLsRfyIPy3oglrXHc7j571tGAJIvsIkQI7QJJ9aiFMT3hPviU3CBFgf3+u31rVKSVgXidug/dh9Kz3bG4I8uvlImlRiQSHG9pUGZ7QR1O89KTivmBJ97hKItOHLAjoSHg/SkSZh4bSTF5uTEkW2ub/ACo1ies9d4jz9NqpcbFzek6cXCt192ym3YXB9RUYDPMZGLgssTsdPiZCyDt1/Slv6N0bITsvbqQbeXpS/eAGLAyNQBWY8ZqHhLmghLjDdwCF+wgm+o2lj4WFVT5jiCcq5fDudwF3Im5LiPM0rdeBpdZpx7vE5p5H6bcrdR6715XnB/SP/Ea74Yeb925xAiLoYlV0Sw0nUSVY3i49K86z+KNb/wATH8RSl3Rez1rBMInLqIVDYmAYXckQNh16VLxXBW0NYSV2afCDa/eoWLgZlgvunwkQKohgzH4RcgRJnoCLdaVlstmeZXbCO4QKCLi/MCpULMdPxiq2E9FItzH5CAdgb39KLUet43JNxtAg7jzNUo4dm4LNm9FwIXDBtA5mIi/7mle9xwLZxIiDqQFge4Hl50uvoOgCm/U7bENMdyPKuW9uX04Czv7xRBBn4GvJ32+lQsTEzmvRhZh3G5fmMyPhCkGI7238Kj8R4JncZArHWNQbmJBkiJuJ6/SjV9Fue0T2eIOHiN/b7+CWq74J1j+1/nIqDwnhOLgYbrjKFLQygMG+EqDMenyqf7OtqLDb4x/7m9Y5f01x7OnxXCKxcEhQbgEmOsBRP/Fede3fFMPEbDCPOkYgaQykElfvATXeZjIM6hWx3MD7ov4nSAJo8vkowyqOwkHm0qrgn06Vv0ZKH2f41hYuGiYaamREViRChtMbhTO3pV8iOtyqDyDMe24j8Kg4HCXXm/lWLpHSFvPeN6nDL6T8eIT2LtFuoA6+dLf0enF8Y4K2XwcRg5dWgNIAF3UyOYkiYrjnNei+1mTdctiOcZiJWUjlPOoAuTt4QDFecruKcKvWctkQFUqFQxcqqz02Jm29Sfchdo7yRLTET+FVuB/KUUf0uGxIEApBNpiVYXi2xpGc4i4B1PDgTpw4ZTty81p8/mKJu+D7PNcZuY+dZT/+lY5/7bGsp6S9Xwjqg2It167TNNaSpmTG83Jv239Ki4b6hIlYEEBeszI8I/GmJigAcxJ1ER47xt0k1Sh4WLAIlDEgwYUdye157nemJiTJJBFtpk9KSsr8cNPQKAOg6gk1ovPxBSBay/eFgom1vpSDmPaa2O/kp/8AQH8qs+BsS8KFnS+/gy7R1qh9p8ULjsNoUGJndKl+zWNrxyhAIOGxMkiRrXtvWWryVvo7H3sQNV/MzHSxIMk/hvRYxcsCrgJ1kEnaSAQbi1J92i3CgkRZd7SbW233o3gG6hhHXxvEtI7da1QI4zBrKzAxERpiPO3y9aIM7Gw9CSPoR4dBWkMwTMAmCOW3blFx5iK2+bVQNTqPCQfkB5daeg2iyGiGtHdfKR0vTMPlIAAt2kAE3M99x8xUPH4qgMrJNthb8qjjP4rC2H2u07HtESaeqnlFoc6wPKCwmCRtboCdz5dqSc8EXU7AAWJPX19KiLgYx30obAWJJlu/Sifhgf43dxsQQVHWxm0E0tQbqLxX2ny5w3RcZHLI4Gk6rlSIkbeRryjN4nM0bkt+Jr2FOEZYAk5dW0wTrQFiSbEAzY1j+zmULGcvhmeyKIjyF+lT52rwHMe1WXTl1IWUc3OoC7SJkzf0p2DnsbHQPhhAjbPMzB6Hr6CtDgmV5SuWwRHX3WHJP+Hp4dafg5d1MIxI+7aBfYWsd6qa9JsvsP8A0t2viYrNPQTG376U0cMRByoHM/aM9d72j0pj8SRGKEnUCJBBmTERa9EjsTEHSfvAKZ7AAfuKVtOSDAYRsAOgBEDpFomlYzgDqNxF9l+1uLfj6UpsRyWQrYMVBVmdwI3OuAp9TuKNcYabJiEbXWT+kfrU7Up/aDHEAbHSemkQSD19KpOFY4S3U6rXnmYnptVlx7nIDKQAGAmDO1xcwBtBiqvhyLqBPVv9UelY5f00nZ26uBbeI79e80CP9oXm9ixH6RtW8RVAADab9Os7/Dfr9aBsZAxhgDNxMX3vJ3rZm378KSWtPfb67UGLmVS7MBPUm3ofyqqTjmEZI1tuIIIBAJ6MdietVmNxHFZiuG2lI+AKCAO8wCD61UxtTcpGe1nFsHEyeIMPERiSlgb/ANYhsDv5+Febl716BleC4eO0PoA7W1HrI7+dTm9jspacI+YdwN/BqWteR3QU4q+NpQOqyAI1aRt1m52q4yvCESC3OfmvnfeoeX9lcqssqmAZ+NjtB72irdcMKpA1RfqSfC5n607le07CSeTdI/YNZS1LdiKykpEfE1lSVIUkC5hpv9kEjvc2+lA/EFRTJCkAWMAhdpM7t28h6wGwnILgQWJBg6WPLEk7N1222qG+VeZK3MTcTMTe/bvWkxntFtScz7VYCAc5LalMJBIEGQ14iO3U1Gf23w9MDCLkmbwgEDeea+w2pOPwsvKvh6ogkRJHyv1qpzvBES5w3TpI1AA+tqVxvilMvYOK8QGYf3mkLqAGncWJWxtvvUrhPE/5NoxQgdmV0KkxpjFaDMG/L9aoMyFWFDG20kTcz0qTkDhsSMRmA0mNESDqBkyDa5rK43a5lHbfz7QBT7qWglhqIVWAAAuOYd+0VT5n/wCQcVhpXDRRBBuZNomYt1+e9UbZZJ5cYkdOS/8AmqGeGuSSvN6GqxmRZWOoyftMcU/02oDqVM/JSR+NdjwvK4OLhB01GeriI7woifn0rzvhXBMd2CDD3vMgrFuomPXtXp/CcFsLCXCcqdMyQNI07xM733HeiZZb14HGa2kphIhiFWbbQDHYHc9e/wAqY5ndQSDy7c29hGxE+XXyWmIhljA0hmkcwEEkS3l0kGke9IgqyaDcnVpYjuBBEXB328rszWxecwhOoAa5EGJjx79q2uFC7sRuSdPkQTbwO1bzKyNCtDMJ1RMeh8x8xUPCyTkh2xC2nqvKCJIkrJ3jbc0QVPTEBkq1vyN59elGXmN9OwPQ7G/Y+lQsmMNVKoihh8Q8RItaAZ1CxsQaqc7xNyQMEMw3JbmkAx063t4iKL06lHRPiAdfH8bfUeNHlmkb2te43HXxrkMDBzCH3mIAQWMoDDrMQ5ERuYjfarvLZlwmqAoMBdbSWa+wAEmnOuOxbq6WmJihE1MQLgbxJjYdzUVs/YjYiDbnbTa+gQ3eLVWpmsw686ItwOaQu5FgTcX/AFrleOpnXxiBhPo2X3U6YHgDY7TU5Sw5ZXcDOK9te17TJE3W3oD5+tRstxLCZ2XDYO2xA+Jo33iYuJry9+IsrcxZXtOrUD9aW2dkzqkk3M3M9frWfLL0eo9B9ocwusRPwHcEXv38tqo+GZoSnQagTPbWCTVMmbLJBay2F9hvH1NCuOEWZ2Egd+tTrd2vtHf5/wBoBzDDF4jVq2PcDqLCqlXxMYxd33gmwO0n7o8a8/x865LbgNcjfbxN6l5LOMFPO3NINzcbQe4rouUxnSMJjcr1r0TI8IYgHEI1dVUyFPQEwC1vKrPKYYS8qAf7AFpgXkn5159wvO45cDBZyxvAlpj7w7V6Dl2dkUuNLtvpMBQR477C3jUTO3uvjJ2Fir3kPJ0xJFokTEQKZgY8iGBBG9utGsgER5fv9+VKdS2kwC0G+0HtO8bdKZjxnCgteACY3J62A3NUp46vwlHwzJ0lxCz6fa/syKtExQpAY6T2JAP+48a3iqekdOvXy/OlZQiYfEkgS4nyYflWU61ZT0CUwTYweaDpJBEjYX2H76VKCWMrBm8beJB6Xmk++UH4gD/aMEX3FxFqaoVypDegLadjeYg1ZMXBE8rA7Sdidxt0NLzeVDrDNt2ht+tvSme8EhQ+kkX1CWFoveI+lqBkdOa76ROtYKybWCm48N6IVc9xD2Uw2YFmUMbWAvftNzvat4HsfgKYZ3nrpCLFutjHrXSJlbs8qGMHUwIIANhE+PlQJiKphxv9qTHkrED6bbdqN2lqRzec9lcJDKF35rhSuoLfYRBaRtPyqXgezKCGKuU7YjhTseibddzV27DSTqZpJAAiPvaZvFuvWtYYcg6ogAiFMsLG9zzHft5US0agWdMvCDCfQSCPdoWE2+K8k77k0zWW+JSV6QIPSJBJIifh8zUj+T6BynpO0pf7Wm/nbtvVe2ZBPIxnV8Magbk6tIuOlEnU7Vo6YbxqKwLwTZiLXBNxfYzeqniLFMdNCBk0wROiCI5QxW3gPwpuYyqsrOEAe5l2IliACAZgTAN53O161igBU0cz9QCQJNtQCm523+lKQ9mZdMTFQh4RZ67+QAN28Z+dDk8o6alHNtBZ2d5M9IC25thNqscpl2CmYIIBtseoJnqe9Bn3A0jUNewAO8iYM7ifA79KLN0TsS4w8GdZcm3wKzkEmYsDF+m96LOkthkqBq3RVOhjciCfsmJFr+NSPiSHJDPYBbOLgEqZO07iq9eAojq4ZzDAadcAtMgsD0gQR1nvU3YmlNxTiN9OgSGXWF1EqW23F+u3nVhh8ScqWXB1st5USQepiLek9dqkZnJH3ZOIyiW1KqyNIHQE/HY+FQcrmlXBecSHPIqDSHaVJEA7kwbwfhNVf5L/AEgY2YzTQWUbtALLqBsIMm3gPA1Y4aO+FpfEOGnw7qeaLIpNhPf1tVRksg+I4ATEBnnZiFCiLg/eaSel66PJZV0XQ2KDcW0i/OTfUTYj5d6y/HteSCOE4Twr4SuItq5jtvBFjeqjO+wuDiQcNjgm9hOIp9C0r+nSurOCEIgwoBgfEVMxIbcA7U9MKBZtzf59LWEx19a1tRI8+wvYXEGoDG274ZgyOh1zWsD2QxXJU4qaQCoYBydtisW/xV22YzLqQuhkBJ0sY0mLbjVE73vWIzsQyCV+z/aG0w0Efu1T0p9nDYXsBiBlDuCrH7AvFry3Xwv+FdPw32OyuGmlkLt1Z794IUiFB8vWrjFaCAsqdQMNygzO1oN+/jQl8TmJUAEnSVJkXjmAsD6xQIj4Iw0Ue4RSjEj+jXSsiQdURcRF/wDiXgrqUMQwmDeLfltS8JCqdzaRdUncnYxJ7eFbxMRtR5oHS5JMxuO2/wBKDaxMwNYw9DgkEhiJU2/53jY0lcNtAkkHY6TYgXBBYTUj3nNdrAbXtfftFqjI7lrgqB3gzM7Mu5teKATmciruNdwNgZsbdZ7fOpitA6/OSKR7wFoIuOsTv2mP3NC+XdyCcWFBEKqjm76ib/Lai9Aka1/ZNZUQ4KC3vI8NW30rVPoXUpMNG1YiwCTB7md9ztH401MfZX1KZJuSqkepva3y2qJi4hDoExUCXJGmXMWGmRab9OlO0KcQa7iBd55j0iLHp51ZJeZdAbuygCbXUkmLnciBsLWpzZgpB5WMCTcQCBsBPiKrzhgNCsAikyp+t1BPjM1GyuNl8TWRqcqdwXYW3Jk2XtS6dh1WBnlDOQsSRhmYLGw7nw6eFMbKoxLGQwFr6l7SRHxeAquxswHVkQFHYBSTKsRGy232oeGcGRV0u7HEY6i0kiCYuRafnftRqyje1nkXTSVw3UkSOacMSf4vii9qkYmcXBRmxHQaYgTzMbbJH1NJwMEE6FCEDYiQetywuSbeG9QMzmsN20OpJHKZadJECe5P6U9bG9Jb5x8dAEQqWAcGSjRtB9KDhSqpGGw0HpJOvtYnpv3F6S5CMUDs5AhA0r538B0qahD6CusuLFeix13nr9KNamk96lsisgRmBeZCsqsDBtKnpM386XkcFr6gg+IbaWUwZ2tft4UeBhLOomXMAMwAMHYDvc+dHnMzpUEiwPMea15ElfyHakvRmbxQiAHlRRc3PkFF5mD4/OysuXOliFKxIc8pW43X730/Cq/3mtA5LKZOgAyGM2Czv8vkBVhlMR3CBkCCC2ncCO7CQf3tSvoJLiepVgIJFx4AaqjnMEtoVuYQbqV6EypPmLie1N0FruDAgWYaSZPN49DvWsU6tLTO4EzHeBaNUjc+NBtDGDFgX3kdo9CPl6edc5lcMLijU83ZoMSOoEjt+RqdxoZhnhGhABI088jcSRG3nsetRspl9boDpfSSWYbsobYqNp8DeenRypsdGqLAMk9QZ7jt61GZTqYydJuAFYmwiZBO5E7WpwwlUFRaJAEj4RfYmYmP3eofFxjMgGC51dQCt9pv/iiKi9FNSDLBzsZBE6RpHLFrT3iZ9aXg50aRy8hEq0RPpvM9IqpyfDsVuV3UKsHUIOuTEGVnoTPSropeBzlBdYDxJtfdfptTl2VhpOoaTpEmZNoYfCFG0Wvt1reC7ALq+LaZBGxNyPLztUHO8Rw1dUfUrrNr6WBEQQ24vvet5bDVxqRGVJ8V1RE8vz7bU4KZgKpYppMdJJIIgnVPW87xQtxDDVmQvdd5IO+wPXe0i9MRCCLsd4OkbfxCIj8zUXEfQxkaVkgcog7QSVEzI8aNegkLiyA50iF5jeAQZAm0WPbqKjvmA8poDHYjkPrDRY963xbHRMPnuH0qFIJkx87QTUXJqiGyQ8ap0lQTBAVmHKAY2HapNKTDGEjKikAESWg77XkzHj86PGzuEFgkw3T4r+hI/Gqh+HZnH1M7e7EkBAdShbbwfMzQ4iLgJ/WagTExy32JudzAkCiX/hUzJvLnTJUD7Ugi+w/fWrfDxdzp6R/v2qp4Xmy+oEHUpPjPkRtVirWvPqD+NXRCsfDwyxJWTabjtWUyU/YrKjUNCf4B5fmtJwPiXxInx5uvesrK0iF/ioI2Gw/Cqzh2Eo95CgSikwAJOk3rVZURVSF+BT1g36/Z60vL7j+H81rKyrJZIeb5f6KrHwlGYMKBzMbAC9r1lZRj3Ohzn9avnh/hVli/E/hoI8DG9brKEncU/qwes/kKhZr4k8SJ8dt+9ZWUoqp2bHxDoIgdBydqjZf4H8j+DVlZSx7C904/1J9PxqpFiwFhD2FhvWVlPEUfEnOgXO/5tSOB/Gf4D+IrKyqn8ovdfN8Df3fyqszLnnudl/KsrKzjRLzphkIsYG1uhqm4k517m6ifH4d+9ZWUei9izHMF1XhxE3jn8al4Vmtbmb/KKysqiiVgfGR0v+VVnHf+2OmsiOkQ1orKyp8qKxbopNyHQjwJBuO1XGZQaxYXQT47b96ysp3uFZwg87DpJ/CuYzqgYpAEAo0gWBud+9ZWUs/6GPZYcF+H0P8AmarRdj5H8KyspztAThbCsrKymT//2Q==',
        }}
      />
      <View style={styles.profileContainer}>
        <View style={[styles.profile, CommonStyles.alignJustifyCenterSpace]}>
          <Icon name="mic" size={25} color={AppColors.grey10} />
        </View>
        <View style={[CommonStyles.marginTopPoin_3, CommonStyles.marginLeft_1]}>
          <CustomText fontWeight="700" size={4}>
            {'"Name" want to Open James'}
          </CustomText>
          <View style={[styles.profileContainer, CommonStyles.marginTop_1]}>
            <CustomText size={4}>{'2 days ago'}</CustomText>
            <Icon
              style={{marginLeft: width(2.5)}}
              name="map-marker-alt"
              size={20}
              color={AppColors.black}
            />

            <CustomText fontWeight="700" size={4}>
              {' Pick it Up Chicago'}
            </CustomText>
          </View>
        </View>
      </View>
      <CustomText
        textStyles={CommonStyles.paddingHorizontal_2}
        numberOfLines={2}>
        {
          'Heli must try and protect his young family when his 12-year-old sister inadvertently involves them in the brutal drug world. He must battle against the drug'
        }
      </CustomText>
      <View style={styles.likesCommintContainer}>
        <View style={styles.profileContainer}>
          <Icon name="heart" size={25} color={AppColors.red80} />
          <CustomText letterSpacing={0.4} size={4}>
            {'  5 Likes'}
          </CustomText>
        </View>

        <View style={styles.profileContainer}>
          <Comment
            name="comment-processing-outline"
            size={25}
            color={AppColors.black}
          />
          <CustomText letterSpacing={0.4} size={4}>
            {'  Comments'}
          </CustomText>
        </View>
      </View>
    </View>
  );
};

export default PostCard;
const styles = StyleSheet.create({
  cardItem: {
    marginVertical: height(1),
    borderRadius: height(2),
    backgroundColor: AppColors.grey15,
  },
  image: {
    height: height(17),
    borderRadius: height(1),
    width: width(88),
    backgroundColor: 'red',
    margin: height(1),
    resizeMode: 'cover',
  },
  profileContainer: {
    flexDirection: 'row',
  },
  textHeader: {
    flex: 2,
    paddingHorizontal: width(3),
    marginTop: height(1),
    // alignItems: 'center',
  },
  profile: {
    width: width(10),
    height: height(5),
    margin: height(1),
    borderRadius: height(50),
    backgroundColor: AppColors.yellow10,
  },

  likesCommintContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: height(1),
    paddingHorizontal: height(2),
  },
  buttons: {
    width: width(20),
    height: height(3.7),
    borderRadius: height(0.5),
  },
});
