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
      'The climber, photographer and co-director of Free Solo distills what decades on big mountains and behind the camera taught him about risk, preparation and commitment.',
    takeaway:
      'I read it for the stories and stayed for the discipline. Preparation is what makes boldness safe, which applies as much to shipping software as to climbing.',
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
      'This is the book that made the borrow checker click for me. It explains why the rules exist, not just what they are, and I still reach for it as a reference.',
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
      'It pushed me to treat health as a daily practice rather than a goal. The idea of building a life that keeps you ready for the next wave stuck with me.',
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
      'As a trail runner I loved the argument that endurance is a skill you can train, not a gift. It changed how I think about fueling long efforts.',
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
      'Where Programming Rust gave me the theory, this gave me the practice. Building real things below the application layer made the language feel useful, not academic.',
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
      'It is one of the most honest pieces of war reporting I have read. It made the human cost of those years concrete in a way headlines never did.',
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
      'It taught me that a story can be truer than the facts behind it. I return to it as much for the craft of the writing as for the subject.',
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
      'TypeScript is my daily language, and this book filled the gaps I had picked up on the job. I lean on the types far more deliberately because of it.',
  },
]
