import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    // 55 usuários
    await queryInterface.bulkInsert('users', [
      {
        username: 'Admin',
        role: 'admin',
        email: 'admin@admin.com',
        password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
        // senha: secret_admin
      },
      {
        username: 'User',
        role: 'user',
        email: 'user@user.com',
        password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
        // senha: secret_user
      },
      // os logins abaixo são intencionalmente inválidos, pois serão usados nos testes
      {
        username: 'User',
        role: 'user',
        email: '@user.com',
        password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
        // senha: secret_user
      },
      {
        username: 'User',
        role: 'user',
        email: 'invalid.user@user.com',
        password: '$2a$10$HDkFwOMKOI6PTza0F7.YRu1Bqsqb9hx7XkuV7QeYB5dRL4z9DI1Mu',
        // senha: 12345
      },
      {
        username: 'Bags',
        role: 'user',
        email: 'bags@user.com',
        password: '$2a$04$r5XscKCWtuYnalJUUF65HuOzypaiTt3p6fDO1QFf53g6DCat0B386',
        // senha: 123456
      },
      // Novos usuários
      {
        username: 'WisdomParrot',
        role: 'user',
        email: 'wisdom.parrot@user.com',
        password: '$2a$08$7BK67XofM8BmK2hxQ4uf7.MUZNqggkdh0GwElLt36nY3fnRz7okpW',
        // senha: wisdom_parrot
      },
      {
        username: 'BraveLion',
        role: 'user',
        email: 'brave.lion@user.com',
        password: '$2a$08$PJUlr80jdnsy9/y7i5vQOOdlzwKTPPd6DEei.yDY2tnG5L9A4/zgG',
        // senha: brave_lion
      },
      {
        username: 'SilentWolf',
        role: 'user',
        email: 'silent.wolf@user.com',
        password: '$2a$08$WgdLE5DGWlY7hfCZiJshsey4irmaSapTBLSyxnrATKmDWgbb2K0aW',
        // senha: silent_wolf
      },
      {
        username: 'SwiftEagle',
        role: 'user',
        email: 'swift.eagle@user.com',
        password: '$2a$08$9B3aaVJWdGp5lzLEx1NUQOPrJsYO0w1j63vG2RziR.ChRH7CoTJWS',
        // senha: swift_eagle
      },
      {
        username: 'GentleDolphin',
        role: 'user',
        email: 'gentle.dolphin@user.com',
        password: '$2a$08$ge/Tf//HJt9rO1s23KZolOAcR8CMtp2K6MvZounWjBIAOrkrBT7HK',
        // senha: gentle_dolphin
      },
      {
        username: 'HappyBear',
        role: 'user',
        email: 'happy.bear@user.com',
        password: '$2a$08$1YLWsgb/.trYw9YBdZMBoOmqqXNfCFYwaq/uZyJPZdxoT8wJhQH5G',
        // senha: happy_bear
      },
      {
        username: 'WiseOwl',
        role: 'user',
        email: 'wise.owl@user.com',
        password: '$2a$08$TfinwcUbGKh7soJId3lQNOv0hfUZ.TpoCPSATyIe9C8Q6W.URwOIq',
        // senha: wise_owl
      },
      {
        username: 'MightyElephant',
        role: 'user',
        email: 'mighty.elephant@user.com',
        password: '$2a$08$uXu6nxRzhe6FLTju17YUre1k5Z3DIStDELkx0hWE.ZAv/oT8VmUoi',
        // senha: mighty_elephant
      },
      {
        username: 'CleverFox',
        role: 'user',
        email: 'clever.fox@user.com',
        password: '$2a$08$lxehazIItTrdSbsNh8O9Cem9w.RDrI1h7SqKziMjNadfxXEC78.6G',
        // senha: clever_fox
      },
      {
        username: 'BoldTiger',
        role: 'user',
        email: 'bold.tiger@user.com',
        password: '$2a$08$BnOUQgtR3TORpD8Dv0sW2uTLm5jhyMMVP4GxTR3hFenYXDA/lOYNO',
        // senha: bold_tiger
      },
      {
        username: 'QuickRabbit',
        role: 'user',
        email: 'quick.rabbit@user.com',
        password: '$2a$08$5uVugEi2N02p7Z4656EaDuEGOpNsJiAA1miIs/2aViC.qPJvpxk0m',
        // senha: quick_rabbit
      },
      {
        username: 'StrongHorse',
        role: 'user',
        email: 'strong.horse@user.com',
        password: '$2a$08$4Fkv/93IVC2fZ4qXdVigIOzfJdcxUj4YmKRkBKQDvl93hzlKwwN1K',
        // senha: strong_horse
      },
      {
        username: 'LoyalDog',
        role: 'user',
        email: 'loyal.dog@user.com',
        password: '$2a$08$iKix8l9USs2tdhcy0r4zde7lzqlKjMGMoPUs1FtR6j/LC1lY0/Ypq',
        // senha: loyal_dog
      },
      {
        username: 'GracefulSwan',
        role: 'user',
        email: 'graceful.swan@user.com',
        password: '$2a$08$$2a$08$vEaEQN.WMZIf3dCB/hN5Bu1lQ5eNocPbu2VmRSBMbl/bThLCW6Y4O',
        // senha: graceful_swan
      },
      {
        username: 'FiercePanther',
        role: 'user',
        email: 'fierce.panther@user.com',
        password: '$2a$08$VIBOyYhVriFguJQr/MR5keLa6G3xjq9sE8CikPifQEcAguZ44hkCK',
        // senha: fierce_panther
      },
      {
        username: 'PlayfulMonkey',
        role: 'user',
        email: 'playful.monkey@user.com',
        password: '$2a$08$KvhWJyZWJ3VhutWtulpSruQ3/O.AXckH0odmaK9Adx7acGZfNFnt6',
        // senha: playful_monkey
      },
      {
        username: 'CuriousCat',
        role: 'user',
        email: 'curious.cat@user.com',
        password: '$2a$08$TQIFKeyt0cVsrjIXNVpXAupfW2UurubLEqrzEzJnqGqtxdpsQZwC.',
        // senha: curious_cat
      },
      {
        username: 'KindDeer',
        role: 'user',
        email: 'kind.deer@user.com',
        password: '$2a$08$Ex.pMab/lRQ89F1vXUEaJ.u.fqaZdT3vWz3cq54DFt0JQ2IjjpU26',
        // senha: kind_deer
      },
      {
        username: 'NobleStag',
        role: 'user',
        email: 'noble.stag@user.com',
        password: '$2a$08$vG/AF4WK0.gqJgBqUmZ9oeDNI0BYBRlZfSXFpTu8OJe7GN4nECpZ2',
        // senha: noble_stag
      },
      {
        username: 'WildBoar',
        role: 'user',
        email: 'wild.boar@user.com',
        password: '$2a$08$o6gvFzM.iMbE32hj/SeMHeDSZL2Gs6zBvLQvcTiin1bFATyk6Uube',
        // senha: wild_boar
      },
      {
        username: 'ProudHawk',
        role: 'user',
        email: 'proud.hawk@user.com',
        password: '$2a$08$82q/vD0u5L3VvHQ8RFlfS.jHQEdrn2ohL4UNvvDApQkgaYoHywrZ2',
        // senha: proud_hawk
      },
      {
        username: 'SlySnake',
        role: 'user',
        email: 'sly.snake@user.com',
        password: '$2a$08$TesBQlFyXc2vEkZGB.C0ZOkWXaJPO8vxdHEcljcx/kXT3kcYGirE2',
        // senha: sly_snake
      },
      {
        username: 'GentleLamb',
        role: 'user',
        email: 'gentle.lamb@user.com',
        password: '$2a$08$mTzoH2GnE5vycS5d17fSWeuYmuL3LhSYNaDCRisc9Bevc3x1gO1AO',
        // senha: gentle_lamb
      },
      {
        username: 'FearlessFalcon',
        role: 'user',
        email: 'fearless.falcon@user.com',
        password: '$2a$08$1wI4idVdEQIpGXxtwvSBdeGHDTWsAjTXLQOM6S.wijFUbfxfQbhHW',
        // senha: fearless_falcon
      },
      {
        username: 'DaringShark',
        role: 'user',
        email: 'daring.shark@user.com',
        password: '$2a$08$2khfXMumyvbmMp/ozt.weuRlyfkPGs/RIPp1VSgGJB1Z450KE/7A',
        // senha: daring_shark
      },
      {
        username: 'MysteriousOwl',
        role: 'user',
        email: 'mysterious.owl@user.com',
        password: '$2a$08$amXwx3KVl.mAgwLYdDK9zes5cPEvdKvRtO9T28oAsugllBkwuzUh',
        // senha: mysterious_owl
      },
      {
        username: 'MajesticEagle',
        role: 'user',
        email: 'majestic.eagle@user.com',
        password: '$2a$08$0j0SBtNEywpg3OWd9.mCM.qQvcXGTcSxwtyqf0UT69nL06uTVeXJ',
        // senha: majestic_eagle
      },
      {
        username: 'NimbleGazelle',
        role: 'user',
        email: 'nimble.gazelle@user.com',
        password: '$2a$08$etNqXME8zD5Ut5WiKE9dGeB6xqLuNtdrMFeCnAEwg.EOoQyKbXBv',
        // senha: nimble_gazelle
      },
      {
        username: 'CunningFox',
        role: 'user',
        email: 'cunning.fox@user.com',
        password: '$2a$08$gPvj1Calzp0h6fPeA2b7q.f0yqXBWrG8T3qSHU4vPDrHXvHAEGJN',
        // senha: cunning_fox
      },
      {
        username: 'SwiftJaguar',
        role: 'user',
        email: 'swift.jaguar@user.com',
        password: '$2a$08$v87c9cNNEI2P.icaVftNYelxNbe00IN4o2bf0dLRfR5laRcxttpc',
        // senha: swift_jaguar
      },
      {
        username: 'FriendlyPanda',
        role: 'user',
        email: 'friendly.panda@user.com',
        password: '$2a$08$FgxDywk170GadunjjwH0oOTblsGY7GJhkEyGwdX6Varo5E8GS8Nw',
        // senha: friendly_panda
      },
      {
        username: 'BoldBuffalo',
        role: 'user',
        email: 'bold.buffalo@user.com',
        password: '$2a$08$zx2dKTj2pPAqKCCDXIZhl.P7TKg92wPAbdRZdO93twLkPvwHLFyV',
        // senha: bold_buffalo
      },
      {
        username: 'NobleHorse',
        role: 'user',
        email: 'noble.horse@user.com',
        password: '$2a$08$yMQOSV.WpmR7BnfqehoPTOXf9dIqFcHYxfMafV4I9bKUWUSlvkCb',
        // senha: noble_horse
      },
      {
        username: 'GracefulPeacock',
        role: 'user',
        email: 'graceful.peacock@user.com',
        password: '$2a$08$j52W/pkU.Zeofr19ReRV0uY2BthbcGBlyYJs.F3Ua.ABv97DcTmum',
        // senha: graceful_peacock
      },
      {
        username: 'CuriousKoala',
        role: 'user',
        email: 'curious.koala@user.com',
        password: '$2a$08$DHSOcXMLpQXB6nDl34TW4eEWQylpFc9s/5KgKO2wfyxvgL5fzNSO',
        // senha: curious_koala
      },
      {
        username: 'FierceCheetah',
        role: 'user',
        email: 'fierce.cheetah@user.com',
        password: '$2a$08$JcgmfW4.DxZ8H.VGarGC0.Vx3CU49ZDfl5cRVwngOhvrGy8LrvOD',
        // senha: fierce_cheetah
      },
      {
        username: 'PlayfulDolphin',
        role: 'user',
        email: 'playful.dolphin@user.com',
        password: '$2a$08$UovjsWr5SOeItspHH78pj.btqD59tUDXiI4FvTT/BymYhJ.c5JVb',
        // senha: playful_dolphin
      },
      {
        username: 'KindRabbit',
        role: 'user',
        email: 'kind.rabbit@user.com',
        password: '$2a$08$EH9MbXRAF8.Di7TsXCLzo.qYXDmCf88H8sUDGZNkwJ5sz2LLi37v',
        // senha: kind_rabbit
      },
      {
        username: 'NobleTiger',
        role: 'user',
        email: 'noble.tiger@user.com',
        password: '$2a$08$VXa.eEDrwbiG33MrAI1nJ.KnunxHDaNoDP.sO75tr6euHoatbRlV',
        // senha: noble_tiger
      },
      {
        username: 'GentlePenguin',
        role: 'user',
        email: 'gentle.penguin@user.com',
        password: '$2a$08$/gKtMwWZLpSdf/u9j30wMu7bbDX4rQM3/su6nQduZNwudQuYfRmk',
        // senha: gentle_penguin
      },
      {
        username: 'BraveHawk',
        role: 'user',
        email: 'brave.hawk@user.com',
        password: '$2a$08$usRxwUpQwGdcT1l29K1wlOLVQADz7pPNew4J7vojV6BEqfYyY.ip',
        // senha: brave_hawk
      },
      {
        username: 'SwiftHorse',
        role: 'user',
        email: 'swift.horse@user.com',
        password: '$2a$08$VSwp.xL1olYtCK5zEMuU2uzxLxnIRkOu3uLaB2UFjQb6Zd66AhPD',
        // senha: swift_horse
      },
      {
        username: 'MightyWolf',
        role: 'user',
        email: 'mighty.wolf@user.com',
        password: '$2a$08$K.4gWA8CIOh3eg53hyDkrOaNzNgTSdlf.0QbYT/MXyxknAPPEF56',
        // senha: mighty_wolf
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
};