import { LinkedList } from "./linkedList.mjs";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.insertAt("chicken", 5);
list.removeAt(2);

console.log(list.toString());