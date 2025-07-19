const SkillsCard = ({ title, icon, text }) => {
  return (
    <article>
      <span>{icon}</span>
      <h4 class='mt-6 font-bold'>{title}</h4>
      <p class='mt-2 text-slate-500'>{text}</p>
    </article>
  );
};

export default SkillsCard;
