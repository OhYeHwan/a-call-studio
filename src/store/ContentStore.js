import { observable, makeObservable, action, toJS, computed } from "mobx";
import { contentListData } from "src/data";
import { uuidv4 } from "src/utils/uuid";

import { messageDialogStore } from "src/stores/messageDialogStore";

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
      messageDialogStore.showMessageDialog({
        type: "error",
        text: "질문의 수가 한개일 경우 삭제할 수 없습니다.",
      });
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
        messageDialogStore.showMessageDialog({
          type: "error",
          text: "존재하는 키워드는 추가할 수 없습니다.",
        });
      }
    } else {
      messageDialogStore.showMessageDialog({
        type: "error",
        text: "빈 키워드는 추가할 수 없습니다.",
      });
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
    contentList["MyApp"] = [];

    contentList["Pay"] = [];

    return contentList;
  }
}

export default ContentStore;
