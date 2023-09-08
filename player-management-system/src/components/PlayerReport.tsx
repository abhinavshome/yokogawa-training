import { useSelector } from "react-redux";
import { playerReportSelector } from "../redux/reducers/playerReducer";

function PlayerReport() {
  const reportData = useSelector(playerReportSelector);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Group</th>
            <th>Players</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((row, index) => (
            <tr key={index}>
              <td>{row.group}</td>
              <td>
                {row.players.map((player) => (
                  <div key={player.id}>
                    {player.name} ({player.age})
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlayerReport;
