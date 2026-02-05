# HTML Notes 📘

Dear Students,

I’m excited to share with you a detailed set of **HTML notes** that I’ve prepared to support your learning journey in web development. This resource is designed to give you a strong foundation in **HTML** and help you understand how web pages are structured and built.

---

##  What’s Inside?

### 🔹 Fundamental Concepts
- Introduction to HTML  
- Structure of an HTML document  
- Purpose of HTML in creating web pages  

### 🔹 Core Elements and Tags
- Detailed explanations of essential HTML tags  
- Attributes and their usage  
- How elements work together to build a webpage  

### 🔹 Practical Examples
- Code snippets for better understanding  
- Real-world examples demonstrating HTML implementation  

### 🔹 Best Practices
- Writing clean and readable HTML  
- Using semantic HTML elements  
- Accessibility-friendly coding guidelines  

### 🔹 Additional Resources
- Links to further reading materials  
- Practice exercises to reinforce learning  

---

## 🛠️ How to Use These Notes

### 1️⃣ Review the Content
Start by reading through the sections to understand the basics of HTML, then gradually move on to more advanced topics.

### 2️⃣ Practice Alongside
Try running the example code on your own system. Experimenting with code is the best way to strengthen your understanding.

### 3️⃣ Ask Questions
If you have any doubts or need clarification, feel free to ask during our sessions or through the class forum.

### 4️⃣ Apply Your Knowledge
Work on the small projects and exercises provided at the end of the notes to apply concepts in a practical way.

---

## Getting Started


👉 <a href="https://carbonated-cirrus-a0f.notion.site/HTML-Notes-2ad3a34077d18118ab36ca9b13815023?source=copy_link" target="_blank">Click here to open the HTML Notes</a>

---

By following these notes, you’ll build a solid understanding of HTML, which is essential as you progress further in web development. Take your time, practice regularly, and note down any questions you may have.







<h2 align="center">MongoDB </h2>

---

### MongoDB Diagram  
👉 View the full diagram here:  
https://drive.google.com/file/d/1NiojH4OZ0pZ5YRgUSWjCcuhjyehTk6_M/view?usp=sharing

---

##  What is a Database in MongoDB?

A **database** is a container that stores multiple collections.  
It is created automatically when you begin inserting data.

#### Definition:
A database in MongoDB is a logical grouping of collections used to organize data.

#### Create or Switch to a Database

```javascript
use schoolDB;
```

If `schoolDB` does not exist, MongoDB creates it when inserting the first document.

#### Check existing databases

```javascript
show dbs;
```

---

## What is a Collection?

A **collection** is a group of documents inside a database.

### #Definition:
A collection is similar to a table in SQL but does not require a fixed schema.

#### Create a Collection

```javascript
db.createCollection("student_details");
```

View all collections:

```javascript
show collections;
```

---

##  What is a Document?

A **document** is a JSON-like object stored within a collection.

#### Example Document:

```json
{
  "name": "Ravi",
  "email": "ravi@gmail.com",
  "skills": ["Java", "Python"],
  "address": { "city": "Vijayawada", "state": "AP" }
}
```

---

## MongoDB Data Types

| Type | Example |
|------|---------|
| String | "Ramu" |
| Number | 25 |
| Null | null |
| Array | ["Java", "Node"] |
| Object | {city: "Hyd"} |
| Boolean | true |
| Function | ()=>{} |
| ISOTime | ISODate() |
| Date | new Date() |

---

## CRUD Operations in MongoDB

CRUD = Create, Read, Update, Delete

---

## CREATE – Insert Data

### insertOne()

**Definition:** Inserts a single document into the collection.

```javascript
db.student_details.insertOne({
    name: "Ravi",
    email: "ravi@gmail.com",
    phone: "974561238"
});
```

---

### insertMany()

**Definition:** Inserts multiple documents at once.

```javascript
db.student_details.insertMany([
    {name: "ramu", email: "ramu@gmail.com"},
    {name: "rani", email: "rani@gmail.com"},
    {name: "admin", email: "admin@gmail.com"}
]);
```

---

## READ – Find Data

### findOne()

**Definition:** Returns the first matching document.

```javascript
db.student_details.findOne();
```

#### Filter:
```javascript
db.student_details.findOne({ name: "Ravi" });
```

#### Projection (field selection):

**Definition:**  
Projection is used to include (1) or exclude (0) specific fields.

```javascript
db.student_details.findOne(
    { name: "Ravi" },
    { _id: 0, name: 1 }
);
```

---

### find()

**Definition:** Returns all matching documents.

```javascript
db.student_details.find();
```

Filter example:

```javascript
db.student_details.find({ name: "Ravi" });
```

Multiple conditions:

```javascript
db.student_details.find({ name: "Ravi", fee: 90000 });
```

Projection:

```javascript
db.student_details.find({}, { _id: 0, name: 1 });
```

---

## DELETE – Remove Data

### deleteOne()

**Definition:** Deletes the first document matching the filter.

```javascript
db.student_details.deleteOne({ name: "Ravi" });
```

---

### deleteMany()

**Definition:** Deletes all documents matching the filter.

```javascript
db.student_details.deleteMany({ name: "Ravi" });
```

---

## UPDATE – Modify Data

#### Update Operators:
- `$set` → Modify or add fields  
- `$unset` → Remove fields  
- `$push` → Add value to an array  
- `$pop` → Remove element from array  
- `$inc` → Increase or decrease numeric value  

---

### updateOne()

**Definition:** Updates the first document matching the filter.

#### Example using $set:

```javascript
db.student_details.updateOne(
    { name: "ramu" },
    { $set: { phone: "9874561230", collegename: "KEC", branch: "CSE" } }
);
```

#### Example using $unset:

```javascript
db.student_details.updateOne(
    { name: "Ramu Kumar" },
    { $unset: { phone: "" } }
);
```

---

### updateMany()

**Definition:** Updates all documents matching the filter.

Increase fee:

```javascript
db.student_details.updateMany(
    { fee: 90000 },
    { $inc: { fee: 30000 } }
);
```

Decrease fee:

```javascript
db.student_details.updateMany(
    { fee: 90000 },
    { $inc: { fee: -20000 } }
);
```

Push skills into array:

```javascript
db.student_details.updateMany(
    { name: "Ramu Kumar" },
    { $push: { skills: ["java", "python", "ruby"] } }
);
```

---

#### $pop Example

**Definition:** Removes first (-1) or last (1) element from an array.

Remove last skill:

```javascript
db.student_details.updateOne(
    { name: "Ramu Kumar" },
    { $pop: { skills: 1 } }
);
```

Remove first skill:

```javascript
db.student_details.updateOne(
    { name: "Ramu Kumar" },
    { $pop: { skills: -1 } }
);
```

---

<h2 align="center">End of MongoDB Notes</h2>



Happy learning and coding! 💻✨

---

**Best regards,**  
**Ashoka M**
