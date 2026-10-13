export type Book = {
  title: string
  author: string
  coverSrc: string
  width: number
  height: number
  // what the book is, 1–2 sentences
  summary: string
  // why I read it / what it gave me
  takeaway: string
}

export const books: Book[] = [
  {
    title: 'Rules to Live By',
    author: 'Jimmy Chin',
    coverSrc: '/images/books/rules-to-live-by.jpg',
    width: 322,
    height: 500,
    summary:
      'The climber, photographer and co-director of Free Solo talks to various unusual and accomplished people who have made an impact on the way that he sees the world and how he lives his life.',
    takeaway:
      'Beautifully written and filled with great gems that I am trying to incorporate into my own life as best I can. A great book for reflecting on what is important in my day to day.',
  },
  {
    title: 'Programming Rust',
    author: 'Jim Blandy, Jason Orendorff & Leonora F. S. Tindall',
    coverSrc: '/images/books/programming-rust.jpg',
    width: 381,
    height: 500,
    summary:
      'A thorough guide to Rust for systems programmers, covering ownership, borrowing, traits, generics, concurrency and unsafe code in depth.',
    takeaway:
      'A great companion to the official Rust Book. It explains why the rules exist, not just what they are, and I reach for it all the time as a reference. A very detailed and helpful resource to keep on my shelf.',
  },
  {
    title: 'Liferider',
    author: 'Laird Hamilton & Julian Borra',
    coverSrc: '/images/books/liferider.jpg',
    width: 331,
    height: 500,
    summary:
      'The big wave surfing pioneer lays out his approach to training, food, recovery and family, framed around a life spent in the ocean.',
    takeaway:
      'It pushed me to treat health as a daily practice rather than a goal. The idea of building a life that keeps you ready for the next wave stuck with me and I try to put that into practice relating to my own trail running.',
  },
  {
    title: 'Natural Born Heroes',
    author: 'Christopher McDougall',
    coverSrc: '/images/books/natural-born-heroes.jpg',
    width: 324,
    height: 500,
    summary:
      'The story of the Cretan resistance kidnapping a German general in World War II, woven together with a look at the lost skills of natural movement, endurance and fat-fueled stamina.',
    takeaway:
      'As a trail runner I loved the argument that endurance is a skill you can train, not a gift. This book has some fascinating information about fueling for long, difficult journeys.',
  },
  {
    title: 'Rust In Action',
    author: 'Tim McNamara',
    coverSrc: '/images/books/rust-in-action.jpg',
    width: 399,
    height: 500,
    summary:
      'Teaches Rust through hands-on systems projects: a CPU emulator, a key-value store, network clients and a tiny operating system kernel.',
    takeaway:
      'Where Programming Rust gave me the theory, this gave me the practice. I read it without much background in systems programming. Building real things below the application layer made the language feel useful.',
  },
  {
    title: 'The Forever War',
    author: 'Dexter Filkins',
    coverSrc: '/images/books/the-forever-war.jpg',
    width: 336,
    height: 500,
    summary:
      'A New York Times correspondent’s firsthand account of the wars in Afghanistan and Iraq, told in vivid, fragmented scenes.',
    takeaway:
      'This book is powerful. It is one of the most memorable pieces of war reporting I have read. Similar to what Michael Herr did with his writing about the Vietnam war, this book made the human cost of the post 9/11 wars concrete in a way that headlines from the newspapers and magazines never did.',
  },
  {
    title: 'The Things They Carried',
    author: "Tim O'Brien",
    coverSrc: '/images/books/the-things-they-carried.jpg',
    width: 343,
    height: 500,
    summary:
      'Linked stories about a platoon of American soldiers in Vietnam that blur the line between memory and fiction.',
    takeaway:
      'This book blew me away with its power. It made me think of the experience of war and how lucky I have been to avoid it so far. It is an amazing book.',
  },
  {
    title: 'Programming TypeScript',
    author: 'Boris Cherny',
    coverSrc: '/images/books/programming-typescript.jpg',
    width: 381,
    height: 500,
    summary:
      'A practical tour of TypeScript’s type system, from the basics through generics, advanced types and structuring large applications.',
    takeaway:
      'TypeScript is one of my daily programming languages, and this book filled the gaps I had. I lean on the types far more deliberately because of it. It helped me gain some confident fluency when programming with TypeScript.',
  },
]
