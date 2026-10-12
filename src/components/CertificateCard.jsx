import { Award, BookOpenCheck, Clock } from "lucide-react";

export default function CertificateCard({ title, provider, status, detail }) {
  const inProgress = status === "in-progress";
  const Icon = inProgress ? Clock : provider ? Award : BookOpenCheck;

  return (
    <li className={`cert reveal${inProgress ? " cert--progress" : ""}`}>
      <span className="cert__icon" aria-hidden="true">
        <Icon size={20} />
      </span>
      <div className="cert__body">
        <h3>{title}</h3>
        {provider ? <p className="cert__provider">{provider}</p> : null}
        {detail ? <p className="cert__detail">{detail}</p> : null}
        <span className="cert__status">
          {inProgress ? "Currently attending" : "Completed"}
        </span>
      </div>
    </li>
  );
}
