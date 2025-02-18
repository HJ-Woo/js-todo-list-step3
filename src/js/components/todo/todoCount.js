import {
  $,
  $all,
  $closet,
  $closetAttr,
  TODO_SELCTOR,
} from "../../utils/dom.js";
import {
  checkClassName,
  checkLocalName,
  removeClass,
  setClass,
} from "../../utils/eventUtils.js";

export default function TodoCount(app) {
  this.render = () => {
    this.$todoCount = $all(TODO_SELCTOR.COUNTER[1]);
    this.$todoCount.forEach((count) =>
      count.addEventListener("click", onClickHandler)
    );
    this.$todoCount.forEach((count) => {
      const closet = $closet(count, TODO_SELCTOR.MEMBER_ID[0]);
      $("strong", count).textContent = $all(
        TODO_SELCTOR.TODO_ITEMS,
        closet
      ).length;
    });
  };

  const select = (event) => {
    const target = event.target;
    const $allFilter = $all(
      TODO_SELCTOR.SELECTED[0],
      $closet(target, TODO_SELCTOR.COUNTER[0])
    );
    $allFilter.forEach((each) => removeClass(each, [TODO_SELCTOR.SELECTED[1]]));
    setClass(target, [TODO_SELCTOR.SELECTED[1]]);
    app.changeStatus(
      $closetAttr(target, ...TODO_SELCTOR.MEMBER_ID),
      $closetAttr(target, ...TODO_SELCTOR.FILTERS)
    );
  };

  const onClickHandler = (event) => {
    event.preventDefault();
    if (checkLocalName(event, "a")) {
      select(event);
      return;
    }
    if (checkClassName(event, "clear-completed")) {
      app.deleteAll($closetAttr(event.target, ...TODO_SELCTOR.MEMBER_ID));
    }
  };
}
