import BranchForm from "./BranchForm";
import ClientForm from "./ClientForm";
import ClientInterestForm from "./ClientInterestForm";
import LeaseForm from "./LeaseForm";
import OwnerForm from "./OwnerForm";
import PropertyForm from "./PropertyForm";
import PropertyReviewForm from "./PropertyReviewForm";
import StaffForm from "./StaffForm";

const ConditionalRendering = (props: any) => {
  switch (props.query) {
    case "Client":
      return <ClientForm />;
    case "Staff":
      return <StaffForm />;
    case "Client Interest":
      return <ClientInterestForm />;
    case "Owner":
      return <OwnerForm />;
    case "Branch":
      return <BranchForm />;
    case "Property":
      return <PropertyForm />;
    case "Lease":
      return <LeaseForm />;
    case "Property Review":
      return <PropertyReviewForm />;
    default:
      return <div>Error in conditional rendering: {props.query}</div>;
  }
};

export default ConditionalRendering;
