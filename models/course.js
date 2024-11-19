const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  name: String,
  questions: [
    {
      question: String,
      options: [
        {
          option: String,
          isCorrect: Boolean,
        },
      ],
    },
  ],
  chapterId: mongoose.Schema.Types.ObjectId,
});

const subTopicSchema = new mongoose.Schema({
  name: String,
  content: String,
  chapterId: mongoose.Schema.Types.ObjectId,
});

const chapterSchema = new mongoose.Schema({
  name: String,
  subTopics: [subTopicSchema],
  // quiz: quizSchema,
  courseId: mongoose.Schema.Types.ObjectId,
});

const courseSchema = new mongoose.Schema({
  courseTitle: String,
  courseImage: String,
  courseDescription: String,
  courseSubtitle: String,
  courseDuration: String,
  courseOutcome: [
    {
      type: String,
    },
  ],
  courseBenefits: [
    {
      type: String,
    },
  ],
  courseRequirements: [
    {
      type: String,
    },
  ],
  salaryRange: {
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
  },
  coursePrice: Number,

  courseContent: [
    {
      chapter: chapterSchema,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Course", courseSchema);
