import NewsFeedItem from "./components/NewsFeedItem";
import { Link } from "react-router-dom";

function NewsFeed() {
  return (
    <div className="text-center text-vintage">
      <h1 className="text-vintage">News Feed</h1>
      <div className="row">
        <div className="col-sm-6">
          <NewsFeedItem
            className="card-viney"
            title={
              <Link to="/news/releasing-viney" className="news-link">
                <h1>Releasing Viney</h1>
              </Link>
            }
            content={
              <p>
                Viney is officialy releasing in some days! Can't wait to see
                this!
              </p>
            }
          />
        </div>
        <div className="col-sm-6">
          <NewsFeedItem
            className="card-viney"
            title={
              <Link to="/news/why-we-made-viney" className="news-link">
                <h1>Why we made Viney</h1>
              </Link>
            }
            content={
              <p>
                Here we made an explication of why we made Viney. Should be
                interesting doesn't it?
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
