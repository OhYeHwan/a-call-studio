import { observable, makeObservable, action, toJS, computed } from "mobx";
import { contentListData } from "src/data";
import { uuidv4 } from "src/utils/uuid";

class ContentStore {
  constructor() {
    makeObservable(this);
  }

  @observable
  _afterKeywords = [];

  @computed
  get afterKeywords() {
    return toJS(this._afterKeywords);
  }

  set afterKeywords(value) {
    this._afterKeywords = value;
  }

  @action
  resetAfterKeywords() {
    this.afterKeywords = [];
  }

  @action
  makeQuestions(value) {
    this.afterKeywords = value;
  }

  // target.keywords

  /*
      keywords: [
        {
          keywordId: "1",
          keyword: "sss",
          questions: [
            {
              questionId: "123",
              questionText: "seaser",
              check: "true"
            }, 
            { 
              ...
            }
          ]
        },
        {
          ...
        },
        ...
      ],
    */

  @action
  handleSaveQuestion(keywordId, questionId, value) {
    const keywordIndex = this.afterKeywords.findIndex(
      (keyword) => keyword.keywordId === keywordId
    );

    const questionIndex = this.afterKeywords[keywordIndex].questions.findIndex(
      (question) => question.questionId === questionId
    );

    const newQuestion = {
      questionId,
      questionText: value,
      check: "",
    };

    this.afterKeywords[keywordIndex].questions[questionIndex] = newQuestion;
  }

  @action
  handleAddQuestion(keywordId, questionId) {
    const keywordIndex = this.afterKeywords.findIndex(
      (keyword) => keyword.keywordId === keywordId
    );

    const questionIndex = this.afterKeywords[keywordIndex].questions.findIndex(
      (question) => question.questionId === questionId
    );

    const newQuestions = [...this.afterKeywords[keywordIndex].questions];

    newQuestions.splice(questionIndex + 1, 0, {
      questionId: uuidv4(),
      questionText: "",
      check: "",
    });

    const newKeyword = {
      ...this.afterKeywords[keywordIndex],
      questions: newQuestions,
    };

    const newKeywords = [...this.afterKeywords];
    newKeywords[keywordIndex] = newKeyword;
    this.afterKeywords = newKeywords;
  }

  @action
  handleDeleteQuestion(keywordId, questionId) {
    const keywordIndex = this.afterKeywords.findIndex(
      (keyword) => keyword.keywordId === keywordId
    );

    const newKeyword = {
      ...this.afterKeywords[keywordIndex],
      questions: this.afterKeywords[keywordIndex].questions.filter(
        (q) => q.questionId !== questionId
      ),
    };

    if (this.afterKeywords[keywordIndex].questions.length === 1) {
      alert("삭제 불가");
    } else {
      const newKeywords = [...this.afterKeywords];
      newKeywords[keywordIndex] = newKeyword;
      this.afterKeywords = newKeywords;
    }
  }

  @action
  handleChangeSummary(value) {
    this.target = {
      ...this.target,
      summary: value,
    };
  }

  @action
  handleAddKeyword(value) {
    if (value) {
      const exist = this.target.keywords.findIndex(
        (keyword) => keyword.keyword === value
      );

      if (exist === -1) {
        const keyword = {
          keywordId: uuidv4(),
          keyword: value,
          questions: [],
        };

        this.target = {
          ...this.target,
          keywords: [...this.target.keywords, keyword],
        };
      } else {
        alert("존재하는 키워드는 추가할 수 없습니다.");
      }
    } else {
      alert("빈 키워드는 추가할 수 없습니다.");
    }
  }

  @action
  findExistKeyword(value, id) {
    return this.target.keywords.findIndex(
      (keyword) => keyword.keyword === value && keyword.keywordId !== id
    );
  }

  @action
  updateKeywords(value, id) {
    const newKeywords = this.target.keywords.map((keyword) => {
      if (keyword.keywordId === id) {
        return {
          keywordId: id,
          keyword: value,
        };
      } else {
        return keyword;
      }
    });
    this.target = {
      ...this.target,
      keywords: newKeywords,
    };
  }

  @action
  deleteKeyword(id) {
    const newKeywords = this.target.keywords.filter(
      (keyword) => keyword.keywordId !== id
    );

    this.target = {
      ...this.target,
      keywords: newKeywords,
    };
  }

  @observable
  _contentList = this.changeFormat(contentListData);

  @observable
  _target = {
    projectName: null,
    pageGroupName: null,
    pageId: null,
    pageName: null,
    summary: null,
    keywords: [],

    voiceScript: null,
  };

  @computed
  get contentList() {
    return this._contentList;
  }

  @computed
  get target() {
    return toJS(this._target);
  }

  set contentList(value) {
    this._contentList = value;
  }

  set target(value) {
    this._target = value;
  }

  changeFormat(data) {
    const contentList = {};
    data.forEach((item) => {
      const contentInfo = {
        id: item.contentId,
        title: `${item.superAppName}_${item.contentName}`,
        fileSize: item.size,
        type: item.superAppName,
      };
      if (Object.keys(contentList).includes(item.superAppName)) {
        contentList[item.superAppName].push(contentInfo);
      } else {
        contentList[item.superAppName] = [contentInfo];
      }
    });
    contentList["MyApp"] = [
      {
        id: "1",
        title: "Myapp_로또말줄임표나오나안나오나",
        fileSize: "254MB",
        type: "Myapp",
      },
      { id: "2", title: "Myapp_타로", fileSize: "254KB", type: "Myapp" },
      { id: "3", title: "Myapp_노트", fileSize: "254KB", type: "Myapp" },
      { id: "4", title: "Myapp_로또", fileSize: "254KB", type: "Myapp" },
      { id: "5", title: "Myapp_타로", fileSize: "254KB", type: "Myapp" },
      { id: "6", title: "Myapp_노트", fileSize: "1GB", type: "Myapp" },
      { id: "7", title: "Myapp_로또", fileSize: "254KB", type: "Myapp" },
      { id: "8", title: "Myapp_타로", fileSize: "254MB", type: "Myapp" },
      { id: "9", title: "Myapp_노트", fileSize: "1GB", type: "Myapp" },
      { id: "10", title: "Myapp_로또", fileSize: "1GB", type: "Myapp" },
      { id: "11", title: "Myapp_타로", fileSize: "1GB", type: "Myapp" },
      { id: "12", title: "Myapp_노트", fileSize: "1GB", type: "Myapp" },
      { id: "13", title: "Myapp_로또", fileSize: "1GB", type: "Myapp" },
      { id: "14", title: "Myapp_타로", fileSize: "1GB", type: "Myapp" },
      { id: "15", title: "Myapp_노트", fileSize: "1GB", type: "Myapp" },
    ];

    contentList["Pay"] = [
      { id: "16", title: "Pay_가디건", fileSize: "10MB", type: "Pay" },
      { id: "17", title: "Pay_교재", fileSize: "10MB", type: "Pay" },
      { id: "18", title: "Pay_가방", fileSize: "10MB", type: "Pay" },
    ];

    return contentList;
  }
}

export default ContentStore;
