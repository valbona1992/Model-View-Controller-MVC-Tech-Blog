const { Post } = require('../models');

const postData = [
    {
      "title": "Vegan Life",
      "content": "Living a sustainable life",
      "user_id": 1
    },
    {
      "title": "Healthcare",
      "content": "Striving for a more integrative care for all.",
      "user_id": 2
    },
    {
      "title": "Spirituality",
      "content": "Allowing yourself to be your most vulnerable and having awareness of a higher power",
      "user_id": 3
    },
    {
    "title": "Shqip",
    "content": "Lorem Ipsum është një tekst shabllon i industrisë së printimit dhe shtypshkronjave. Lorem Ipsum ka qenë teksti shabllon i industrisë që nga vitet 1500, kur një shtypës i panjohur morri një galeri shkrimesh dhe i ngatërroi për të krijuar një libër mostër. Teksti i ka mbijetuar jo vetëm pesë shekujve, por edhe kalimit në shtypshkrimin elektronik, duke ndenjur në thelb i pandryshuar. U bë i njohur në vitet 1960 me lëshimin e letrave 'Letraset' që përmbanin tekstin Lorem Ipsum, e në kohët e fundit me aplikacione publikimi si Aldus PageMaker që përmbajnë versione të Lorem Ipsum",
    "user_id": 1
  },
  {
    "title": "French",
    "content": "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
    "user_id": 2
  },
  {
    "title": "Turkish",
    "content": "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.",
    "user_id": 3
  }
  ];
  


const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;