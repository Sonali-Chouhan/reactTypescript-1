import React, { useEffect, useState } from "react";

const AnotherType = () => {
  const [item, setItem] = useState<{ [key: string]: any }>({});
  useEffect(() => {
    setItem({
      username: "xyz",
      payAmt: 100,
      department: "Dev",
      tasks: ["dev", "test", "ship"],
    });
  }, []);
  return (
    <div>
      {item?.tasks?.map((x: any) => (
        <p>{x}</p>
      ))}
    </div>
  );
};

export default AnotherType;
