import MissionListItem from './MissionListItem';

function MissionList({ contents, onDeleteMission }) {
  return (
    <div>
      {contents.map((content, index) => (
        <MissionListItem key={index} content={content} onDelete={() => onDeleteMission(index)} />
      ))}
    </div>
  );
}

export default MissionList;
