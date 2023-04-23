function QueryResultTable({ data }) {
  if (!data) {
    return <div>No data available</div>;
  }
  if (data.length === 0) {
    return <div>No data available</div>;
  }
  if (data === undefined || data === null) {
    return <div>No data available</div>;
  }
  const keys = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            {keys.map((key, index) => (
              <th key={index}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: any) => (
            <tr key={index}>
              {keys.map((key, index) => (
                <td key={index}>{item[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default QueryResultTable;
