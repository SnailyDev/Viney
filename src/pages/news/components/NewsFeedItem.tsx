interface FeedItemProps {
  title: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
function NewsFeedItem({
  title,
  content,
  footer,
  className,
  style,
}: FeedItemProps) {
  return (
    <>
      <div className={className} style={style}>
        {title}
        {content}
        {footer}
      </div>
    </>
  );
}
export default NewsFeedItem;
