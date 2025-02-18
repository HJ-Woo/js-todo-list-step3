import { PATH } from "../../utils/dom.js";

export function Team(inputId, inputName, inputMembers = []) {
  const _id = inputId;
  const name = inputName;
  const members = inputMembers ?? [];

  this.addMember = (member) => members.push(member);
  this.matchId = (id) => _id == id;

  this.getName = () => name;
  this.getId = () => _id;
  this.getMembers = () => members;
}

export const TeamTemplate = (team) =>
  `<div id="" class="team-card-container">
      <a id="${team.getId()}" href="${PATH.TEAM}" class="card">
        <div class="card-title">${team.getName()}</div>
      </a>
		</div>
    `;

export const parseTeam = (team) => new Team(team._id, team.name, team.members);
