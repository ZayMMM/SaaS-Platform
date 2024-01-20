import { Card, Image, ListGroup } from "react-bootstrap";
import DateFilterDropDown from "../DateFilterDropdown/DateFilterDropDown";
import ExportButton from "../Button/ExportButton";
import SocialMediaItem from "./SocialMediaItem";
import AllImage from "../../assets/images/social-media/all.svg";
import AllWhiteImage from "../../assets/images/social-media/all-w.svg";
import FacebookImage from "../../assets/images/social-media/facebook.svg";
import FacebookWhiteImage from "../../assets/images/social-media/facebook-w.svg";
import TwitterImage from "../../assets/images/social-media/twitter.svg";
import TwitterWhiteImage from "../../assets/images/social-media/twitter-w.svg";
import BlogImage from "../../assets/images/social-media/blog.svg";
import BlogWhiteImage from "../../assets/images/social-media/blog-w.svg";
import ForumImage from "../../assets/images/social-media/forturm.svg";
import ForumWhiteImage from "../../assets/images/social-media/forturm-w.svg";
import NewsImage from "../../assets/images/social-media/news.svg";
import NewsWhiteImage from "../../assets/images/social-media/news-w.svg";
import VideoImage from "../../assets/images/social-media/video.svg";
import VideoWhiteImage from "../../assets/images/social-media/video-w.svg";
import PhotoImage from "../../assets/images/social-media/photo.svg";
import PhotoWhiteImage from "../../assets/images/social-media/photo-w.svg";

interface SociaMediaProps {
  title: string;
  showYearPicker?: boolean;
  showExport?: boolean;
  dateFilterType?: number;
  handleFilterTypeChange?: any;
  selectedFilterYear?: Date;
  handleFilterYearChange?: any;
  selectedStartDate?: Date;
  handleStartDateChange?: any;
  selectedEndDate?: Date;
  handleEndDateChange?: any;
  selectedMonth?: number;
  handleMonthChange?: any;
  productList?: any;
  isVertical?: boolean;
  activeKey?: string;
  activeKeyChange: any;
}

const SocialMedia = ({
  title,
  showYearPicker,
  showExport,
  dateFilterType = 1,
  handleFilterTypeChange,
  selectedFilterYear,
  handleFilterYearChange,
  selectedStartDate,
  handleStartDateChange,
  selectedEndDate,
  handleEndDateChange,
  selectedMonth,
  handleMonthChange,
  isVertical = false,
  activeKey,
  activeKeyChange,
}: SociaMediaProps) => {
  return (
    <>
      <Card className="dashboard-card h-100">
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between w-100 flex-wrap gap-2">
            <p className="chartTitle mb-0">{title}</p>
            <div className="d-flex gap-2 align-items-center">
              {showYearPicker && (
                <DateFilterDropDown
                  handleFilterTypeChange={handleFilterTypeChange}
                  selectedFilterType={dateFilterType}
                  selectedFilterYear={selectedFilterYear}
                  handleFilterYearChange={handleFilterYearChange}
                  selectedStartDate={selectedStartDate}
                  handleStartDateChange={handleStartDateChange}
                  selectedEndDate={selectedEndDate}
                  handleEndDateChange={handleEndDateChange}
                  handleMonthChange={handleMonthChange}
                  selectedMonth={selectedMonth}
                />
              )}
              {showExport && <ExportButton />}
            </div>
          </div>

          <ListGroup horizontal className="social-media-list mt-4 ">
            <ListGroup.Item
              className={`w-100 p-1 ${activeKey === "all" ? " active" : ""}`}
              onClick={() => activeKeyChange("all")}
            >
              <SocialMediaItem
                image={activeKey === "all" ? AllWhiteImage : AllImage}
                altText="All"
                label="All"
                count="12345"
              />
            </ListGroup.Item>
            <ListGroup.Item
              className={`w-100 p-1 ${
                activeKey === "facebook" ? " active" : ""
              }`}
              onClick={() => activeKeyChange("facebook")}
            >
              <SocialMediaItem
                image={
                  activeKey === "facebook" ? FacebookWhiteImage : FacebookImage
                }
                altText="Facebook"
                label="Facebook"
                count="12345"
              />
            </ListGroup.Item>

            <ListGroup.Item
              className={`w-100 p-1 ${
                activeKey === "twitter" ? " active" : ""
              }`}
              onClick={() => activeKeyChange("twitter")}
            >
              <SocialMediaItem
                image={
                  activeKey === "twitter" ? TwitterWhiteImage : TwitterImage
                }
                altText="Twitter"
                label="Twitter"
                count="12345"
              />
            </ListGroup.Item>
            <ListGroup.Item
              className={`w-100 p-1 ${activeKey === "blog" ? " active" : ""}`}
              onClick={() => activeKeyChange("blog")}
            >
              <SocialMediaItem
                image={activeKey === "blog" ? BlogWhiteImage : BlogImage}
                altText="Blog"
                label="Blog"
                count="12345"
              />
            </ListGroup.Item>
            {!isVertical && (
              <>
                <ListGroup.Item
                  className={`w-100 p-1 ${
                    activeKey === "forum" ? " active" : ""
                  }`}
                  onClick={() => activeKeyChange("forum")}
                >
                  <SocialMediaItem
                    image={activeKey === "forum" ? ForumWhiteImage : ForumImage}
                    altText="Forums"
                    label="Forums"
                    count="12345"
                  />
                </ListGroup.Item>
                <ListGroup.Item
                  className={`w-100 p-1 ${
                    activeKey === "news" ? " active" : ""
                  }`}
                  onClick={() => activeKeyChange("news")}
                >
                  <SocialMediaItem
                    image={activeKey === "news" ? NewsWhiteImage : NewsImage}
                    altText="News"
                    label="News"
                    count="12345"
                  />
                </ListGroup.Item>
                <ListGroup.Item
                  className={`w-100 p-1 ${
                    activeKey === "video" ? " active" : ""
                  }`}
                  onClick={() => activeKeyChange("video")}
                >
                  <SocialMediaItem
                    image={activeKey === "video" ? VideoWhiteImage : VideoImage}
                    altText="Video"
                    label="Video"
                    count="12345"
                  />
                </ListGroup.Item>
                <ListGroup.Item
                  className={`w-100 p-1 ${
                    activeKey === "photo" ? " active" : ""
                  }`}
                  onClick={() => activeKeyChange("photo")}
                >
                  <SocialMediaItem
                    image={activeKey === "photo" ? PhotoWhiteImage : PhotoImage}
                    altText="Photo"
                    label="Photo"
                    count="12345"
                  />
                </ListGroup.Item>
              </>
            )}
          </ListGroup>
          {isVertical && (
            <ListGroup horizontal className="social-media-list">
              <ListGroup.Item
                className={`w-100 p-1 ${
                  activeKey === "forum" ? " active" : ""
                }`}
                onClick={() => activeKeyChange("forum")}
              >
                <SocialMediaItem
                  image={activeKey === "forum" ? ForumWhiteImage : ForumImage}
                  altText="Forums"
                  label="Forums"
                  count="12345"
                />
              </ListGroup.Item>
              <ListGroup.Item
                className={`w-100 p-1 ${activeKey === "news" ? " active" : ""}`}
                onClick={() => activeKeyChange("news")}
              >
                <SocialMediaItem
                  image={activeKey === "news" ? NewsWhiteImage : NewsImage}
                  altText="News"
                  label="News"
                  count="12345"
                />
              </ListGroup.Item>
              <ListGroup.Item
                className={`w-100 p-1 ${
                  activeKey === "video" ? " active" : ""
                }`}
                onClick={() => activeKeyChange("video")}
              >
                <SocialMediaItem
                  image={activeKey === "video" ? VideoWhiteImage : VideoImage}
                  altText="Video"
                  label="Video"
                  count="12345"
                />
              </ListGroup.Item>
              <ListGroup.Item
                className={`w-100 p-1 ${
                  activeKey === "photo" ? " active" : ""
                }`}
                onClick={() => activeKeyChange("photo")}
              >
                <SocialMediaItem
                  image={activeKey === "photo" ? PhotoWhiteImage : PhotoImage}
                  altText="Photo"
                  label="Photo"
                  count="12345"
                />
              </ListGroup.Item>
            </ListGroup>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default SocialMedia;
