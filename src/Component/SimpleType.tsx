import { useEffect, useState } from "react";

const SimpleType = () => {
  const [employee, setEmployee] = useState<{ name: string; salary: number }>({
    name: "",
    salary: 0,
  });
  useEffect(() => {
    setEmployee({ name: "data1", salary: 40000 });
  }, []);
  return (
    <div>
      <p>{employee.name}</p>
    </div>
  );
};

export default SimpleType;
