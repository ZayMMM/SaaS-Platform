import { Card, Image, ListGroup } from "react-bootstrap";
import DateFilterDropDown from "../DateFilterDropdown/DateFilterDropDown";
import ExportButton from "../Button/ExportButton";
import SocialMediaItem from "./SocialMediaItem";
import AllImage from "../../assets/images/social-media/all.svg";
import FacebookImage from "../../assets/images/social-media/facebook.svg";
import TwitterImage from "../../assets/images/social-media/twitter.svg";
import BlogImage from "../../assets/images/social-media/blog.svg";
import ForumImage from "../../assets/images/social-media/forturm.svg";
import NewsImage from "../../assets/images/social-media/news.svg";
import VideoImage from "../../assets/images/social-media/video.svg";
import PhotoImage from "../../assets/images/social-media/photo.svg";

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
            <ListGroup.Item className="w-100 p-1 active">
              <SocialMediaItem
                image={AllImage}
                altText="All"
                label="All"
                count="12345"
              />
            </ListGroup.Item>
            <ListGroup.Item className="w-100 p-1">
              <SocialMediaItem
                image={FacebookImage}
                altText="Facebook"
                label="Facebook"
                count="12345"
              />
            </ListGroup.Item>

            <ListGroup.Item className="w-100 p-1">
              <SocialMediaItem
                image={TwitterImage}
                altText="Twitter"
                label="Twitter"
                count="12345"
              />
            </ListGroup.Item>
            <ListGroup.Item className="w-100 p-1">
              <SocialMediaItem
                image={BlogImage}
                altText="Blog"
                label="Blog"
                count="12345"
              />
            </ListGroup.Item>
            {!isVertical && (
              <>
                <ListGroup.Item className="w-100 p-1">
                  <SocialMediaItem
                    image={ForumImage}
                    altText="Forums"
                    label="Forums"
                    count="12345"
                  />
                </ListGroup.Item>
                <ListGroup.Item className="w-100 p-1">
                  <SocialMediaItem
                    image={NewsImage}
                    altText="News"
                    label="News"
                    count="12345"
                  />
                </ListGroup.Item>
                <ListGroup.Item className="w-100 p-1">
                  <SocialMediaItem
                    image={VideoImage}
                    altText="Video"
                    label="Video"
                    count="12345"
                  />
                </ListGroup.Item>
                <ListGroup.Item className="w-100 p-1">
                  <SocialMediaItem
                    image={PhotoImage}
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
              <ListGroup.Item className="w-100 p-1">
                <SocialMediaItem
                  image={ForumImage}
                  altText="Forums"
                  label="Forums"
                  count="12345"
                />
              </ListGroup.Item>
              <ListGroup.Item className="w-100 p-1">
                <SocialMediaItem
                  image={NewsImage}
                  altText="News"
                  label="News"
                  count="12345"
                />
              </ListGroup.Item>
              <ListGroup.Item className="w-100 p-1">
                <SocialMediaItem
                  image={VideoImage}
                  altText="Video"
                  label="Video"
                  count="12345"
                />
              </ListGroup.Item>
              <ListGroup.Item className="w-100 p-1">
                <SocialMediaItem
                  image={PhotoImage}
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
