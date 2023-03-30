import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function useRegType() {
  const router = useRouter();
  const defaultVal = "";
  const [regType, setRegType] = useState(defaultVal);

  useEffect(() => {
    const { query } = router;
    const { regType } = query;
    setRegType(regType);
  }, [router]);

  return regType;
}

export default useRegType;
