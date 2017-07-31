export const ACTION_LOGIN = "ACTION_LOGIN";
export const ACTION_LOGOUT = "ACTION_LOGOUT";
export const ACTION_SAVE_USER = "ACTION_SAVE_USER";
export const ACTION_SET_BANDS = "ACTION_SET_BANDS";
export const ACTION_SET_ALBUMS = "ACTION_SET_ALBUMS";
export const ACTION_SET_FILTER = "ACTION_SET_FILTER";
export const ACTION_SET_PLAYLIST = "ACTION_SET_PLAYLIST";
export const ACTION_SET_TOP_ALBUMS = "ACTION_SET_TOP_ALBUMS";

const baseUrl = "./../images/banners/";

const images = {
  banner01: require("./../images/banners/banner01.jpg"),
  banner02: require("./../images/banners/banner02.jpg"),
  banner03: require("./../images/banners/banner03.jpg"),
  banner04: require("./../images/banners/banner04.png"),
  metallica: require("./../images/banners/metallica.jpg"),
  fearof: require("./../images/banners/fearOfTheDark.jpg"),
}

export function onLogin(user) {
  return { type: ACTION_LOGIN, user }
}

export function onLogout(user) {
  return { type: ACTION_LOGOUT, user: null }
}

export function getTopAlbums() {
  return {
    type: ACTION_SET_TOP_ALBUMS,
    albums: [
      {
        id: 1,
        title: "Saengerkrieg",
        artist: "In Extremo",
        banner: images.banner01
      },
      {
        id: 2,
        title: "Saengerkrieg",
        artist: "In Extremo",
        banner: images.banner01
      },
      {
        id: 3,
        title: "Saengerkrieg",
        artist: "In Extremo",
        banner: images.banner01
      },
    ]
  }
}

export function getBands() {
  return {
    type: ACTION_SET_BANDS,
    bands: [
      {
        id: 1,
        title: "In Extremo",
        description: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
        albums: [{ qtSongs: 10, banner: images.banner01 }, { qtSongs: 5, banner: images.banner02 }],
        banner: images.banner02
      },
      {
        id: 2,
        title: "Therion",
        description: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
        albums: [{ qtSongs: 5, banner: images.banner01 }, { qtSongs: 5, banner: images.banner02 }, { qtSongs: 5, banner: images.banner01 }],
        banner: images.banner04
      },
      {
        id: 3,
        title: "In Extremo",
        description: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
        albums: [{ qtSongs: 10, banner: images.banner01 }, { qtSongs: 5, banner: images.banner01 }],
        banner: images.banner04
      },
      {
        id: 4,
        title: "Therion",
        description: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
        albums: [{ qtSongs: 5, banner: images.banner01 }, { qtSongs: 5, banner: images.banner02 }, { qtSongs: 5, banner: images.banner01 }],
        banner: images.banner04
      },
    ]
  }
}

export function getAlbums() {

  return {
    type: ACTION_SET_ALBUMS,
    albums: [
      {
        id: 1,
        title: "Saengerkrieg",
        artist: "In Extremo",
        time: 20.10,
        description: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
        banner: images.banner01
      },
      {
        id: 2,
        title: "Master of puppets",
        artist: "Metallica",
        time: 15.10,
        description: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
        banner: images.metallica
      },
      {
        id: 3,
        title: "Fear of the dark",
        artist: "iron maiden",
        time: 13.00,
        description: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
        banner: images.fearof
      },
      {
        id: 4,
        title: "Saengerkrieg",
        artist: "In Extremo",
        time: 20.10,
        description: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
        banner: images.banner01
      },
      {
        id: 5,
        title: "Master of puppets",
        artist: "Metallica",
        time: 15.10,
        description: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
        banner: images.metallica
      },
      {
        id: 6,
        title: "Fear of the dark",
        artist: "iron maiden",
        time: 13.00,
        description: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
        banner: images.fearof
      },
    ]
  }
}

export function getPlayList() {
  return {
    type: ACTION_SET_PLAYLIST,
    playlist: {
      title: "Minha PlayList",
      banner: images.banner03,
      albums: [
        {
          id: 5,
          title: "Master of puppets",
          artist: "Metallica",
          time: 15.10,
          description: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
          banner: images.metallica
        },
        {
          id: 6,
          title: "Fear of the dark",
          artist: "iron maiden",
          time: 13.00,
          description: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
          banner: images.fearof
        },
      ]
    }
  }
}

export function onSaveUser(user) {
  return { type: ACTION_SAVE_USER, user }
}

export function onSetFilter(filter) {
  return { type: ACTION_SET_FILTER, filter }
}