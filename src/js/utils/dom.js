export const $ = (selector, target = document) =>
  target.querySelector(selector);
export const DEFAULT_SELECTOR = {
  ID: "#",
  CLASS: ".",
};

export const TEAM_SELECTOR = {
  TEAM_LIST: ".team-list-container",
  TEAM_ADD_BUTTON_CONTAINER: ".add-team-button-container",
  TEAM_ADD_BUTTON: "#add-team-button",
  TEAM_TITLE: "#team-title",
  TEAM_TITLE_TAG: "strong",
};

export const MEMBER_SELECTOR = {
  ADD_BUTTON: "#add-user-button",
};

export const TODO_SELCTOR = {
  TODO_LIST_CONTAINER: ".todoapp-list-container",
  TODO_LIST: ".todo-list",
  TODO_APP_CONTAINER: (id) => `.todoapp-container[data-member-id="${id}"]`,
};

export const PATH = {
  TEAM: "/kanban.html",
};

export const getQueryId = () => {
  const params = new URLSearchParams(location.search);
  return params.get("id");
};
