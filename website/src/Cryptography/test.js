import { generateMerkleTree,verifyMerkleTree } from "./merkleTreeFunctions.js";
 


console.log(generateMerkleTree(["a","b"]) )
console.log(verifyMerkleTree( generateMerkleTree(["a","b"]) , "b" )  )