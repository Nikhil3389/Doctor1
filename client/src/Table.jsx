
const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Rate</th>
          <th>Speciality</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.first_name}</td>
            <td>{item.rate}</td>
            <td>{item.Specialist}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
