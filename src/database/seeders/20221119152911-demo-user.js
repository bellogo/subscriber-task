'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('users', 
     [{"id":1,"first_name":"Lancaster","gender":"male","created_at":"2022-03-06T10:31:22","updated_at":"2016-12-19T08:23:27"},{"id":2,"first_name":"Edwards","gender":"male","created_at":"2014-11-02T08:11:06","updated_at":"2018-08-05T04:04:57"},{"id":3,"first_name":"Ortega","gender":"male","created_at":"2019-03-03T07:50:30","updated_at":"2022-07-19T02:57:28"},{"id":4,"first_name":"Acevedo","gender":"male","created_at":"2022-09-26T08:49:50","updated_at":"2019-06-12T09:37:39"},{"id":5,"first_name":"Humphrey","gender":"male","created_at":"2016-02-03T11:55:10","updated_at":"2014-01-17T01:56:53"},{"id":6,"first_name":"Jaclyn","gender":"female","created_at":"2020-11-14T03:11:58","updated_at":"2020-09-01T11:36:10"},{"id":7,"first_name":"Pickett","gender":"male","created_at":"2019-10-02T02:52:36","updated_at":"2017-03-14T10:05:56"},{"id":8,"first_name":"Stark","gender":"male","created_at":"2017-08-12T09:17:19","updated_at":"2022-10-05T02:13:22"},{"id":9,"first_name":"Tammy","gender":"female","created_at":"2022-04-21T08:03:42","updated_at":"2014-01-22T04:51:30"},{"id":10,"first_name":"Jane","gender":"female","created_at":"2022-06-10T11:02:44","updated_at":"2016-12-27T06:12:31"},{"id":11,"first_name":"Kent","gender":"male","created_at":"2021-04-15T12:13:30","updated_at":"2016-01-15T10:33:00"},{"id":12,"first_name":"Todd","gender":"male","created_at":"2014-12-23T08:04:05","updated_at":"2022-01-10T09:26:57"},{"id":13,"first_name":"Corinne","gender":"female","created_at":"2015-04-18T02:28:27","updated_at":"2020-10-02T04:26:47"},{"id":14,"first_name":"Lara","gender":"female","created_at":"2018-04-25T12:45:50","updated_at":"2018-04-07T11:00:47"},{"id":15,"first_name":"Inez","gender":"female","created_at":"2019-06-09T07:59:06","updated_at":"2015-12-02T06:45:28"},{"id":16,"first_name":"Connie","gender":"female","created_at":"2018-07-24T06:12:02","updated_at":"2016-07-13T03:07:44"},{"id":17,"first_name":"Jo","gender":"female","created_at":"2018-12-30T10:52:32","updated_at":"2019-12-18T09:35:18"},{"id":18,"first_name":"Adele","gender":"female","created_at":"2020-06-24T02:15:55","updated_at":"2015-08-01T11:02:41"},{"id":19,"first_name":"Bradford","gender":"male","created_at":"2014-06-28T05:06:48","updated_at":"2021-12-25T10:19:01"},{"id":20,"first_name":"Dennis","gender":"male","created_at":"2014-08-31T05:14:58","updated_at":"2016-04-04T04:06:01"},{"id":21,"first_name":"West","gender":"male","created_at":"2020-11-24T10:38:05","updated_at":"2021-06-30T03:59:24"},{"id":22,"first_name":"Emma","gender":"female","created_at":"2015-01-01T04:02:28","updated_at":"2022-03-12T09:24:55"},{"id":23,"first_name":"Tracy","gender":"female","created_at":"2014-12-01T08:18:00","updated_at":"2021-09-04T03:39:06"},{"id":24,"first_name":"Mcbride","gender":"male","created_at":"2015-12-08T12:42:19","updated_at":"2021-11-02T12:15:38"},{"id":25,"first_name":"Hickman","gender":"male","created_at":"2015-05-05T01:12:02","updated_at":"2014-02-27T10:57:56"},{"id":26,"first_name":"Hinton","gender":"male","created_at":"2022-01-17T02:56:57","updated_at":"2022-07-13T12:20:19"},{"id":27,"first_name":"Ofelia","gender":"female","created_at":"2018-10-05T02:51:56","updated_at":"2021-03-06T05:01:13"},{"id":28,"first_name":"Emerson","gender":"male","created_at":"2020-08-27T05:27:40","updated_at":"2021-08-01T01:07:31"},{"id":29,"first_name":"Patel","gender":"male","created_at":"2018-10-13T11:10:53","updated_at":"2020-11-29T11:13:09"},{"id":30,"first_name":"Tonia","gender":"female","created_at":"2020-01-30T12:49:50","updated_at":"2018-10-10T01:31:29"},{"id":31,"first_name":"Irwin","gender":"male","created_at":"2022-07-15T04:50:41","updated_at":"2020-11-22T07:29:29"},{"id":32,"first_name":"Lynnette","gender":"female","created_at":"2014-03-19T12:55:33","updated_at":"2021-04-18T11:54:27"},{"id":33,"first_name":"Chandra","gender":"female","created_at":"2014-03-11T09:40:52","updated_at":"2018-09-08T06:16:25"},{"id":34,"first_name":"Cooley","gender":"male","created_at":"2022-06-17T04:43:27","updated_at":"2014-01-22T05:03:51"},{"id":35,"first_name":"Peck","gender":"male","created_at":"2022-02-05T09:36:45","updated_at":"2018-12-23T01:19:07"},{"id":36,"first_name":"Erma","gender":"female","created_at":"2016-03-02T02:05:49","updated_at":"2019-10-21T09:35:16"},{"id":37,"first_name":"Doris","gender":"female","created_at":"2020-01-05T08:37:44","updated_at":"2018-03-11T08:59:45"},{"id":38,"first_name":"Rowe","gender":"male","created_at":"2021-04-14T02:11:21","updated_at":"2021-11-21T03:20:07"},{"id":39,"first_name":"Slater","gender":"male","created_at":"2020-12-07T03:12:51","updated_at":"2020-08-21T04:01:34"},{"id":40,"first_name":"Esmeralda","gender":"female","created_at":"2017-10-13T06:13:19","updated_at":"2019-03-10T11:00:25"},{"id":41,"first_name":"Kelly","gender":"female","created_at":"2016-04-09T06:40:20","updated_at":"2018-08-03T01:48:22"},{"id":42,"first_name":"Whitfield","gender":"male","created_at":"2015-02-24T12:42:00","updated_at":"2021-04-03T03:40:00"},{"id":43,"first_name":"Houston","gender":"male","created_at":"2019-09-26T02:02:33","updated_at":"2015-09-14T09:14:27"},{"id":44,"first_name":"Crystal","gender":"female","created_at":"2020-08-31T02:32:48","updated_at":"2021-08-15T03:38:40"},{"id":45,"first_name":"Pitts","gender":"male","created_at":"2016-09-08T07:54:17","updated_at":"2020-11-11T05:31:11"},{"id":46,"first_name":"Shannon","gender":"female","created_at":"2018-07-28T05:00:47","updated_at":"2016-02-20T04:18:58"},{"id":47,"first_name":"Watts","gender":"male","created_at":"2019-01-10T01:38:22","updated_at":"2018-06-11T07:42:56"},{"id":48,"first_name":"Diaz","gender":"male","created_at":"2020-12-10T04:30:03","updated_at":"2020-07-28T06:49:25"},{"id":49,"first_name":"Alejandra","gender":"female","created_at":"2019-12-12T10:56:51","updated_at":"2015-02-27T07:50:17"},{"id":50,"first_name":"Flossie","gender":"female","created_at":"2019-11-02T05:52:59","updated_at":"2019-05-21T10:21:54"},{"id":51,"first_name":"Eugenia","gender":"female","created_at":"2016-03-09T07:03:45","updated_at":"2020-06-21T05:49:37"},{"id":52,"first_name":"Avila","gender":"male","created_at":"2021-09-10T08:52:28","updated_at":"2020-10-05T11:40:22"},{"id":53,"first_name":"Giles","gender":"male","created_at":"2016-07-04T05:51:42","updated_at":"2019-05-31T02:13:13"},{"id":54,"first_name":"Sandra","gender":"female","created_at":"2021-11-30T12:17:00","updated_at":"2014-11-10T04:41:39"},{"id":55,"first_name":"Jeanie","gender":"female","created_at":"2019-04-10T07:49:59","updated_at":"2021-05-27T05:03:25"},{"id":56,"first_name":"Diann","gender":"female","created_at":"2019-03-09T05:55:27","updated_at":"2015-04-29T05:30:09"},{"id":57,"first_name":"Natalia","gender":"female","created_at":"2020-10-23T05:57:46","updated_at":"2022-04-09T03:32:15"},{"id":58,"first_name":"Celeste","gender":"female","created_at":"2019-12-19T12:09:33","updated_at":"2022-02-13T05:49:19"},{"id":59,"first_name":"Rhodes","gender":"male","created_at":"2019-01-25T09:57:07","updated_at":"2019-08-30T05:21:42"},{"id":60,"first_name":"Coleen","gender":"female","created_at":"2019-05-21T10:59:45","updated_at":"2014-10-12T09:53:14"},{"id":61,"first_name":"Alison","gender":"female","created_at":"2020-05-16T10:48:05","updated_at":"2016-07-14T09:58:23"},{"id":62,"first_name":"Morales","gender":"male","created_at":"2018-08-18T06:28:10","updated_at":"2015-10-28T01:00:04"},{"id":63,"first_name":"Curtis","gender":"male","created_at":"2022-03-31T10:47:31","updated_at":"2018-08-13T09:20:20"},{"id":64,"first_name":"David","gender":"male","created_at":"2021-10-26T01:44:50","updated_at":"2018-03-09T11:31:28"},{"id":65,"first_name":"Angelique","gender":"female","created_at":"2014-04-04T10:00:59","updated_at":"2017-12-17T10:29:33"},{"id":66,"first_name":"Nona","gender":"female","created_at":"2016-02-03T09:43:09","updated_at":"2019-05-30T10:52:39"},{"id":67,"first_name":"Ivy","gender":"female","created_at":"2020-10-15T07:01:41","updated_at":"2018-01-08T08:13:01"},{"id":68,"first_name":"Pena","gender":"male","created_at":"2015-02-15T12:14:48","updated_at":"2015-07-12T02:32:22"},{"id":69,"first_name":"Alston","gender":"male","created_at":"2018-06-10T05:10:57","updated_at":"2020-11-29T02:37:41"},{"id":70,"first_name":"Mari","gender":"female","created_at":"2016-03-29T01:42:33","updated_at":"2022-05-31T07:47:43"},{"id":71,"first_name":"Bailey","gender":"male","created_at":"2021-11-27T06:51:10","updated_at":"2017-08-30T10:16:29"},{"id":72,"first_name":"Mcconnell","gender":"male","created_at":"2016-02-03T03:52:21","updated_at":"2014-10-08T05:01:12"},{"id":73,"first_name":"Dee","gender":"female","created_at":"2015-11-17T08:13:17","updated_at":"2014-11-03T09:53:02"},{"id":74,"first_name":"Shelby","gender":"female","created_at":"2016-04-21T11:43:42","updated_at":"2019-05-15T05:11:46"},{"id":75,"first_name":"Meghan","gender":"female","created_at":"2014-10-28T12:29:25","updated_at":"2020-03-12T03:01:39"},{"id":76,"first_name":"Maribel","gender":"female","created_at":"2022-05-31T12:49:37","updated_at":"2016-08-25T06:55:09"},{"id":77,"first_name":"Russo","gender":"male","created_at":"2018-09-22T07:30:00","updated_at":"2018-01-27T11:04:19"},{"id":78,"first_name":"Nichols","gender":"male","created_at":"2014-05-13T11:09:07","updated_at":"2019-01-14T03:50:19"},{"id":79,"first_name":"Velez","gender":"male","created_at":"2021-03-27T01:46:46","updated_at":"2019-01-07T09:34:24"},{"id":80,"first_name":"Bender","gender":"male","created_at":"2017-09-04T02:14:39","updated_at":"2021-08-28T11:57:22"},{"id":81,"first_name":"Williamson","gender":"male","created_at":"2014-02-05T05:27:49","updated_at":"2017-05-08T07:15:21"},{"id":82,"first_name":"Marguerite","gender":"female","created_at":"2017-10-07T02:41:36","updated_at":"2015-07-26T01:15:40"},{"id":83,"first_name":"Mona","gender":"female","created_at":"2020-10-29T01:42:12","updated_at":"2018-02-28T02:51:43"},{"id":84,"first_name":"Ester","gender":"female","created_at":"2020-09-05T12:26:41","updated_at":"2021-05-18T04:18:52"},
     {"id":85,"first_name":"Eddie","gender":"female","created_at":"2022-09-03T11:56:21","updated_at":"2018-11-01T09:22:27"},{"id":86,"first_name":"Christi","gender":"female","created_at":"2021-04-20T07:27:33","updated_at":"2021-05-31T12:05:19"},{"id":87,"first_name":"Trudy","gender":"female","created_at":"2022-04-07T09:22:55","updated_at":"2015-05-18T10:41:53"},{"id":88,"first_name":"Osborne","gender":"male","created_at":"2017-05-05T12:01:29","updated_at":"2019-09-26T02:45:07"},{"id":89,"first_name":"Chris","gender":"female","created_at":"2017-12-14T09:22:53","updated_at":"2022-10-22T12:36:47"},{"id":90,"first_name":"Perkins","gender":"male","created_at":"2021-01-25T04:37:33","updated_at":"2015-12-29T03:19:01"},{"id":91,"first_name":"Raymond","gender":"male","created_at":"2014-01-18T03:06:39","updated_at":"2017-05-29T09:58:27"},{"id":92,"first_name":"Gonzalez","gender":"male","created_at":"2014-07-15T04:20:39","updated_at":"2019-08-30T07:51:28"},{"id":93,"first_name":"Johanna","gender":"female","created_at":"2017-07-12T11:04:12","updated_at":"2014-06-21T04:22:10"},{"id":94,"first_name":"Lowe","gender":"male","created_at":"2020-08-02T11:33:30","updated_at":"2021-04-20T09:10:31"},{"id":95,"first_name":"Andrews","gender":"male","created_at":"2020-07-13T07:58:47","updated_at":"2020-02-16T06:09:58"},{"id":96,"first_name":"Dean","gender":"male","created_at":"2020-06-15T09:48:32","updated_at":"2017-01-04T09:24:44"},{"id":97,"first_name":"Booker","gender":"male","created_at":"2019-02-06T02:39:19","updated_at":"2021-04-15T11:35:51"},{"id":98,"first_name":"Oneill","gender":"male","created_at":"2017-06-29T12:21:54","updated_at":"2019-10-29T04:20:55"},{"id":99,"first_name":"Pearl","gender":"female","created_at":"2017-12-21T06:50:33","updated_at":"2018-01-11T04:43:56"},{"id":100,"first_name":"Wilson","gender":"male","created_at":"2014-10-11T01:23:23","updated_at":"2017-07-18T08:01:38"},{"id":101,"first_name":"Vargas","gender":"male","created_at":"2015-05-17T09:33:26","updated_at":"2020-04-26T08:57:12"},{"id":102,"first_name":"Padilla","gender":"male","created_at":"2019-08-14T02:08:54","updated_at":"2022-10-17T11:56:05"},{"id":103,"first_name":"Christensen","gender":"male","created_at":"2021-11-29T06:28:45","updated_at":"2018-05-10T10:15:43"},{"id":104,"first_name":"Ginger","gender":"female","created_at":"2017-02-18T05:50:37","updated_at":"2022-11-06T03:05:21"},{"id":105,"first_name":"Roy","gender":"male","created_at":"2018-12-12T10:35:37","updated_at":"2015-03-08T12:09:10"},{"id":106,"first_name":"Dona","gender":"female","created_at":"2015-03-12T03:44:21","updated_at":"2016-11-18T01:41:58"},{"id":107,"first_name":"Bernadine","gender":"female","created_at":"2014-05-30T01:52:50","updated_at":"2014-04-25T02:30:35"},{"id":108,"first_name":"Hardin","gender":"male","created_at":"2018-12-14T09:29:07","updated_at":"2014-10-26T05:21:53"},{"id":109,"first_name":"Stone","gender":"male","created_at":"2021-10-01T11:00:25","updated_at":"2021-03-18T09:26:22"},{"id":110,"first_name":"Gutierrez","gender":"male","created_at":"2014-12-12T01:28:41","updated_at":"2014-01-14T08:12:00"},{"id":111,"first_name":"House","gender":"male","created_at":"2015-02-19T10:23:51","updated_at":"2022-01-18T11:31:03"},{"id":112,"first_name":"Brenda","gender":"female","created_at":"2020-11-01T09:07:50","updated_at":"2020-07-22T05:56:15"},{"id":113,"first_name":"Louisa","gender":"female","created_at":"2018-03-08T08:00:37","updated_at":"2016-07-23T05:22:20"},{"id":114,"first_name":"Hill","gender":"male","created_at":"2019-10-14T05:33:28","updated_at":"2016-05-28T10:41:23"},{"id":115,"first_name":"Skinner","gender":"male","created_at":"2016-03-07T01:45:04","updated_at":"2021-08-21T12:57:20"},{"id":116,"first_name":"Dorothea","gender":"female","created_at":"2016-06-03T04:09:40","updated_at":"2014-03-24T09:41:02"},{"id":117,"first_name":"Michele","gender":"female","created_at":"2022-09-24T06:00:29","updated_at":"2015-03-15T02:12:32"},{"id":118,"first_name":"Wilkinson","gender":"male","created_at":"2015-04-11T07:56:30","updated_at":"2020-06-04T04:15:04"},{"id":119,"first_name":"Ellen","gender":"female","created_at":"2017-06-13T08:23:48","updated_at":"2022-01-21T04:20:49"},{"id":120,"first_name":"Nguyen","gender":"male","created_at":"2021-10-11T06:51:22","updated_at":"2014-09-15T08:22:33"},{"id":121,"first_name":"Patti","gender":"female","created_at":"2022-09-26T08:19:11","updated_at":"2016-03-31T01:24:17"},{"id":122,"first_name":"Guy","gender":"male","created_at":"2018-06-24T08:18:16","updated_at":"2021-10-24T05:24:00"},{"id":123,"first_name":"Dominguez","gender":"male","created_at":"2014-05-26T10:38:30","updated_at":"2020-11-19T07:47:48"},{"id":124,"first_name":"Deirdre","gender":"female","created_at":"2019-05-04T12:21:49","updated_at":"2020-04-03T10:31:30"},{"id":125,"first_name":"Marisa","gender":"female","created_at":"2019-06-07T01:16:49","updated_at":"2016-03-17T01:51:25"},{"id":126,"first_name":"Fleming","gender":"male","created_at":"2022-03-19T06:20:25","updated_at":"2018-10-30T10:53:20"},{"id":127,"first_name":"Janice","gender":"female","created_at":"2019-11-23T10:09:46","updated_at":"2017-04-04T07:16:28"},{"id":128,"first_name":"Burns","gender":"male","created_at":"2021-11-18T01:34:14","updated_at":"2014-01-10T12:26:53"},{"id":129,"first_name":"Santos","gender":"male","created_at":"2019-11-23T04:17:50","updated_at":"2014-09-22T01:22:26"},{"id":130,"first_name":"Carolyn","gender":"female","created_at":"2021-04-30T06:41:58","updated_at":"2020-05-24T08:17:57"},{"id":131,"first_name":"Waters","gender":"male","created_at":"2016-06-14T12:24:22","updated_at":"2017-11-21T11:47:50"},{"id":132,"first_name":"Deena","gender":"female","created_at":"2015-01-28T10:15:30","updated_at":"2019-01-16T12:36:13"},{"id":133,"first_name":"Wynn","gender":"male","created_at":"2019-06-14T10:21:52","updated_at":"2019-07-05T03:29:46"},{"id":134,"first_name":"Annette","gender":"female","created_at":"2022-10-22T05:52:04","updated_at":"2018-10-14T11:55:12"},{"id":135,"first_name":"Shaffer","gender":"male","created_at":"2022-08-01T01:52:35","updated_at":"2017-03-26T10:53:20"},{"id":136,"first_name":"Kay","gender":"female","created_at":"2021-04-05T11:16:26","updated_at":"2021-01-10T11:52:41"},{"id":137,"first_name":"Edith","gender":"female","created_at":"2014-08-24T07:41:36","updated_at":"2020-07-07T10:00:45"},{"id":138,"first_name":"Sloan","gender":"male","created_at":"2014-01-21T09:17:14","updated_at":"2022-07-28T12:12:15"},{"id":139,"first_name":"Griffith","gender":"male","created_at":"2017-04-18T03:14:48","updated_at":"2020-02-12T10:11:44"},{"id":140,"first_name":"Ballard","gender":"male","created_at":"2018-04-26T11:20:22","updated_at":"2017-02-16T10:31:16"},{"id":141,"first_name":"Dollie","gender":"female","created_at":"2021-10-22T11:37:26","updated_at":"2017-07-11T05:57:25"},{"id":142,"first_name":"Howe","gender":"male","created_at":"2020-11-12T09:48:28","updated_at":"2015-02-25T02:48:39"},{"id":143,"first_name":"Lily","gender":"female","created_at":"2018-07-31T03:28:45","updated_at":"2019-06-06T02:59:08"},{"id":144,"first_name":"Eleanor","gender":"female","created_at":"2022-04-27T06:15:05","updated_at":"2014-06-11T07:13:50"},{"id":145,"first_name":"Georgette","gender":"female","created_at":"2021-06-08T11:00:31","updated_at":"2015-02-01T04:26:13"},{"id":146,"first_name":"Hoffman","gender":"male","created_at":"2021-08-26T12:17:38","updated_at":"2017-03-27T08:51:38"},{"id":147,"first_name":"Tracie","gender":"female","created_at":"2020-10-29T04:56:56","updated_at":"2018-02-09T01:04:11"},{"id":148,"first_name":"Lynda","gender":"female","created_at":"2017-03-25T06:59:54","updated_at":"2022-05-03T05:33:28"},{"id":149,"first_name":"Bray","gender":"male","created_at":"2022-07-02T08:05:54","updated_at":"2018-06-28T02:07:57"},{"id":150,"first_name":"Copeland","gender":"male","created_at":"2018-09-15T02:04:09","updated_at":"2015-12-25T02:38:25"},{"id":151,"first_name":"Janelle","gender":"female","created_at":"2017-12-01T08:55:33","updated_at":"2016-07-12T12:05:42"},{"id":152,"first_name":"Jodi","gender":"female","created_at":"2019-10-11T05:59:59","updated_at":"2020-09-03T06:45:11"},{"id":153,"first_name":"Rosanne","gender":"female","created_at":"2017-10-22T07:02:45","updated_at":"2014-12-03T08:36:58"},{"id":154,"first_name":"Glenda","gender":"female","created_at":"2015-09-25T05:18:12","updated_at":"2019-08-17T04:25:48"},{"id":155,"first_name":"Moses","gender":"male","created_at":"2018-07-25T12:36:06","updated_at":"2015-03-12T02:48:32"},{"id":156,"first_name":"Juliette","gender":"female","created_at":"2021-12-01T12:27:42","updated_at":"2017-03-17T10:13:37"},{"id":157,"first_name":"Cobb","gender":"male","created_at":"2017-12-20T06:22:40","updated_at":"2016-09-01T08:34:13"},{"id":158,"first_name":"Zimmerman","gender":"male","created_at":"2015-05-17T05:21:17","updated_at":"2019-05-20T12:09:25"},{"id":159,"first_name":"Mercer","gender":"male","created_at":"2018-01-21T02:51:46","updated_at":"2017-01-11T10:43:17"},{"id":160,"first_name":"Mendoza","gender":"male","created_at":"2022-06-30T11:46:47","updated_at":"2018-03-30T08:31:24"},{"id":161,"first_name":"Chambers","gender":"male","created_at":"2018-02-16T12:51:04","updated_at":"2014-09-08T12:43:18"},{"id":162,"first_name":"Stevenson","gender":"male","created_at":"2017-09-15T01:05:45","updated_at":"2017-03-21T08:16:21"},{"id":163,"first_name":"Carlson","gender":"male","created_at":"2017-12-02T08:03:29","updated_at":"2022-01-19T02:49:09"},{"id":164,"first_name":"Yates","gender":"male","created_at":"2020-11-30T10:20:49","updated_at":"2014-07-27T08:40:28"},{"id":165,"first_name":"Shana","gender":"female","created_at":"2015-02-13T11:16:30","updated_at":"2014-12-30T01:51:35"},{"id":166,"first_name":"Colleen","gender":"female","created_at":"2015-12-29T01:45:32","updated_at":"2018-10-04T09:17:47"},{"id":167,"first_name":"Sweet","gender":"male","created_at":"2022-10-21T02:50:25","updated_at":"2019-07-21T11:54:00"},
     {"id":168,"first_name":"Mitchell","gender":"male","created_at":"2014-08-22T06:59:30","updated_at":"2016-09-28T03:19:00"},{"id":169,"first_name":"Browning","gender":"male","created_at":"2017-03-28T01:41:12","updated_at":"2017-11-04T04:04:21"},{"id":170,"first_name":"Betty","gender":"female","created_at":"2019-10-04T05:38:32","updated_at":"2014-09-11T10:30:11"},{"id":171,"first_name":"Reed","gender":"male","created_at":"2017-04-30T06:24:19","updated_at":"2022-04-21T12:30:28"},{"id":172,"first_name":"Ada","gender":"female","created_at":"2019-02-02T08:34:35","updated_at":"2015-05-21T07:15:28"},{"id":173,"first_name":"Kristi","gender":"female","created_at":"2016-10-02T09:29:24","updated_at":"2022-11-04T03:44:29"},{"id":174,"first_name":"Davidson","gender":"male","created_at":"2017-12-20T09:20:22","updated_at":"2017-03-20T10:36:58"},{"id":175,"first_name":"Patsy","gender":"female","created_at":"2020-12-14T07:43:07","updated_at":"2014-07-06T02:24:38"},{"id":176,"first_name":"Contreras","gender":"male","created_at":"2019-06-17T07:25:20","updated_at":"2021-12-30T07:52:19"},{"id":177,"first_name":"Shari","gender":"female","created_at":"2022-11-17T08:05:16","updated_at":"2022-05-05T04:28:34"},{"id":178,"first_name":"Elise","gender":"female","created_at":"2017-10-28T05:49:37","updated_at":"2017-08-04T03:48:44"},{"id":179,"first_name":"Dolly","gender":"female","created_at":"2014-03-14T01:31:42","updated_at":"2014-07-22T04:12:52"},{"id":180,"first_name":"Brewer","gender":"male","created_at":"2022-10-04T08:16:02","updated_at":"2022-05-11T12:47:18"},{"id":181,"first_name":"Gomez","gender":"male","created_at":"2015-02-18T06:40:03","updated_at":"2022-07-19T08:32:56"},{"id":182,"first_name":"Sheri","gender":"female","created_at":"2018-07-27T12:08:56","updated_at":"2015-09-01T05:54:16"},{"id":183,"first_name":"Rosetta","gender":"female","created_at":"2015-03-29T05:41:24","updated_at":"2014-12-15T07:55:21"},{"id":184,"first_name":"Deana","gender":"female","created_at":"2020-04-07T03:07:01","updated_at":"2016-09-08T04:51:26"},{"id":185,"first_name":"Kaitlin","gender":"female","created_at":"2020-12-30T02:45:16","updated_at":"2020-02-07T04:26:48"},{"id":186,"first_name":"Branch","gender":"male","created_at":"2021-10-21T12:43:02","updated_at":"2021-03-18T07:52:00"},{"id":187,"first_name":"Puckett","gender":"male","created_at":"2019-11-25T12:35:36","updated_at":"2017-09-11T05:30:19"},{"id":188,"first_name":"Beard","gender":"male","created_at":"2018-11-28T09:58:34","updated_at":"2014-09-18T03:53:18"},{"id":189,"first_name":"Byers","gender":"male","created_at":"2021-11-05T05:50:30","updated_at":"2018-01-04T10:55:07"},{"id":190,"first_name":"Katharine","gender":"female","created_at":"2019-07-14T08:18:12","updated_at":"2019-08-19T11:21:50"},{"id":191,"first_name":"Marks","gender":"male","created_at":"2018-02-17T03:57:45","updated_at":"2021-05-02T09:39:43"},{"id":192,"first_name":"Lynne","gender":"female","created_at":"2016-01-22T12:37:02","updated_at":"2022-09-14T08:23:17"},{"id":193,"first_name":"Betsy","gender":"female","created_at":"2016-01-03T07:31:38","updated_at":"2014-06-09T04:10:22"},{"id":194,"first_name":"Castillo","gender":"male","created_at":"2018-10-16T07:55:57","updated_at":"2017-11-13T02:57:20"},{"id":195,"first_name":"Alana","gender":"female","created_at":"2015-11-15T04:06:18","updated_at":"2019-08-05T04:01:50"},{"id":196,"first_name":"Katina","gender":"female","created_at":"2019-07-26T08:28:31","updated_at":"2019-10-17T05:34:14"},{"id":197,"first_name":"Charlotte","gender":"female","created_at":"2021-04-11T12:43:56","updated_at":"2017-08-09T01:59:04"},{"id":198,"first_name":"Blankenship","gender":"male","created_at":"2019-05-17T11:57:59","updated_at":"2017-04-30T06:20:41"},{"id":199,"first_name":"Earline","gender":"female","created_at":"2015-01-24T07:53:05","updated_at":"2018-05-11T08:17:11"},{"id":200,"first_name":"Dunlap","gender":"male","created_at":"2014-09-27T12:20:27","updated_at":"2014-03-30T09:43:55"}]
     , {});
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};