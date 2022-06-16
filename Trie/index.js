class Vertex {
  constructor(char, children = [], endsHere = false) {
    this.char = char;
    this.children = children;
    this.endsHere = endsHere;
  }
}

class Trie {
  constructor() {
    this.root = new Vertex("/", []);
  }

  insert(word) {
    word = word.toLocaleLowerCase();
    let head = this.root;

    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      const v = new Vertex(letter, [], i == word.length - 1);

      let childIndex = this.getChildIndex(head, v.char);

      let newHeadIndex = childIndex;
      if (childIndex == -1) {
        head.children.push(v);
        newHeadIndex = head.children.length - 1;
      }

      head = head.children[newHeadIndex];
    }
  }

  exists(word) {
    let head = this.root;
    for (let letter of word) {
      const childIndex = this.getChildIndex(head, letter);

      if (childIndex == -1) {
        break;
      } else {
        head = head.children[childIndex];
      }
    }

    return head.endsHere;
  }

  startsWith(prefix) {
    let head = this.root;

    for (let i = 0; i < prefix.length; i++) {
      let childIndex = this.getChildIndex(head, prefix[i]);

      if (childIndex != -1) {
        head = head.children[childIndex];
      } else {
        return [];
      }
    }

    const giveYourself = (vertex) => {
      if (vertex.children.length === 0) {
        return [vertex.char];
      } else {
        let arr = [];
        vertex.children.forEach((child) => {
          arr.push(...giveYourself(child));
        });

        return arr.map((suffix) => vertex.char + suffix);
      }
    };

    return giveYourself(head).map(
      (x) => prefix.substring(0, prefix.length - 1) + x
    );
  }

  getChildIndex(vertex, letter) {
    for (let j = 0; j < vertex.children.length; j++) {
      if (vertex.children[j].char == letter) {
        return j;
      }
    }

    return -1;
  }
}

const t1 = new Trie();
t1.insert("bat");
t1.insert("ball");
t1.insert("banana");
t1.insert("pineapple");

const prefixes = ["b", "ball", "dummy", "pine"];

prefixes.forEach((prefix) => {
  console.log("Words that start with " + prefix, t1.startsWith(prefix));
});

const words = ["banana", "bal", "ball", "peach"];
words.forEach((word) => {
  console.log("The word '" + word + "' is in the trie - " + t1.exists(word));
});
