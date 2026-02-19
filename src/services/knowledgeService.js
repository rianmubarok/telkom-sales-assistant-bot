const knowledge = require("../data/knowledge");

// GET ALL DATA
function getAllKnowledge() {
  return knowledge;
}

// FIND ANSWER STRING
function findAnswer(message) {
  const item = findKnowledge(message);
  return item ? item.answer : null;
}

// FIND FULL KNOWLEDGE OBJECT
function findKnowledge(message) {
  const lowerMessage = message.toLowerCase();

  for (const item of knowledge) {
    for (const keyword of item.keywords) {
      // Gunakan regex untuk pencocokan kata yang tepat (whole word match)
      // Agar "wifi" tidak cocok dengan "wifi id" secara parsial jika tidak diinginkan
      const regex = new RegExp(`\\b${keyword.toLowerCase()}\\b`, 'i');
      if (regex.test(lowerMessage)) {
        return item;
      }
    }
  }

  return null;
}

// PRODUCT LIST
function getProductList() {
  return knowledge.map((item) => "- " + item.keywords[0]).join("\n");
}

// STATS
module.exports = {
  findAnswer,
  findKnowledge,
  getProductList,
};
