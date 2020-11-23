import React, { useEffect } from 'react';
import {
  TitleDark,
  PDark,
  Input,
  Button,
  Column,
  ColumnFull,
  Row,
  ProfileImage,
  Divider,
  Error,
  Warning,
  ColumnMain,
  Anchor,
  ButtonDark,
} from './styles';
import {
  hackerStringDecode,
  hackerStringOne,
  location,
  projects,
  projectArray,
  industry,
  industryArray,
  complete,
  dmLink,
  mskassistLink,
  mission,
  mission2,
  jest,
  jest2,
} from '../../../utils';
import axios from 'axios';

export function Page1({ setStoryPage }) {
  const [section, setSection] = React.useState(0);
  const [giveJob, setGiveJob] = React.useState(0);
  const [apiData, setApiData] = React.useState();
  const [inputObject, setInputObject] = React.useState([
    { string: '', passLength: 30 },
    { string: '', passLength: 30 },
    { string: '', passLength: 30 },
    { string: '', passLength: 30 },
    { string: '', passLength: 30 },
    { string: '', passLength: 30 },
    { string: '', passLength: 1 },
    { string: '', passLength: 30 },
    { string: '', passLength: 30 },
    { string: '', passLength: 30 },
  ]);
  const maxPage = 7;

  useEffect(() => {
    axios.get(`http://localhost:4000/api`).then((res) => {
      console.log(res);
      setApiData(res.request.statusText);
    });
  }, [setApiData]);
  return apiData === 'OK' ? (
    <ColumnMain>
      <Row>CONNECTING TO POINTLESS API.....COMPLETE</Row>
      <Divider />
      <Row>PLEASE COMMENCE TYPING LIKE AN 80'S HACKER</Row>
      <Divider />
      <Row>------------------------------------------</Row>
      <Divider />
      <Row>
        <div>
          {inputObject[0].string.length >= inputObject[0].passLength
            ? hackerStringOne
            : hackerStringOne.substring(0, inputObject[0].string.length)}
        </div>
      </Row>
      <Divider />
      <Row>
        <div>
          {inputObject[1].string.length >= inputObject[1].passLength
            ? hackerStringDecode
            : hackerStringDecode.substring(0, inputObject[1].string.length)}
        </div>
        <ProfileImage
          src="https://pbs.twimg.com/profile_images/1280236020571803650/lnAuQXtK_400x400.jpg"
          hover={10 - inputObject[1].string.length / 3}
          display={inputObject[1].string.length > 1 ? 'block' : 'none'}
        />
      </Row>
      <Divider />
      <Row>
        <div>
          {inputObject[2].string.length >= inputObject[2].passLength
            ? location
            : location.substring(0, inputObject[2].string.length)}
        </div>
      </Row>
      <Divider />
      <ColumnFull>
        <Row>
          {inputObject[3].string.length >= inputObject[3].passLength
            ? projects
            : projects.substring(0, inputObject[3].string.length)}
        </Row>

        {inputObject[3].string.length >= inputObject[3].passLength - 2 &&
          projectArray.map((item, index) => (
            <Row key={`key_${index}`}>
              {item}
              {index === 0 && (
                <Anchor href={mskassistLink}>{mskassistLink}</Anchor>
              )}
              {index === 1 && <Anchor href={dmLink}>{dmLink}</Anchor>}
            </Row>
          ))}
      </ColumnFull>
      <Divider />
      <ColumnFull>
        <div>
          {inputObject[4].string.length >= inputObject[4].passLength
            ? industry
            : industry.substring(0, inputObject[4].string.length)}
        </div>

        {inputObject[4].string.length >= inputObject[4].passLength - 2 &&
          industryArray.map((item, index) => (
            <Row key={`keyone_${index}`}>{item}</Row>
          ))}
      </ColumnFull>
      <Divider />
      <Row>
        <div>
          {inputObject[5].string.length >= inputObject[5].passLength
            ? jest
            : jest.substring(0, inputObject[5].string.length)}
        </div>
      </Row>
      <Divider />
      <Row>
        <Error>
          {inputObject[6].string.length >= inputObject[6].passLength
            ? jest2
            : jest2.substring(0, inputObject[6].string.length)}
        </Error>
      </Row>
      <Divider />
      <Row>
        <Warning>
          <b>{section >= 7 && complete}</b>
        </Warning>
      </Row>
      <Divider />
      <Row>
        <Warning>{section >= 8 && mission}</Warning>
      </Row>
      <Divider />
      <Row>
        <div>{section === 9 && mission2}</div>
      </Row>
      <Divider />
      {section >= 9 && (
        <Button
          onMouseOver={() => giveJob === 0 && setGiveJob(1)}
          onClick={() => setStoryPage(2)}
        >
          {giveJob === 1 ? (
            <div>Give Tim the Job</div>
          ) : (
            <div>Don't Give Tim the Job</div>
          )}
        </Button>
      )}
      <Divider />
      {section >= 9 && (
        <Button
          onMouseOver={() => giveJob === 1 && setGiveJob(0)}
          onClick={() => setStoryPage(2)}
        >
          {giveJob === 0 ? (
            <div>Give Tim the Job</div>
          ) : (
            <div>Don't Give Tim the Job</div>
          )}
        </Button>
      )}
      <Divider />
      <Input
        value={inputObject[section].string}
        onChange={(e) => {
          let newArr = [...inputObject];

          section >= 7 &&
            e.target.value.toLowerCase() === 'y' &&
            setSection(section * 1 + 1);
          section >= 7 &&
            e.target.value.toLowerCase() === 'n' &&
            setStoryPage(1);
          section >= 7 &&
            e.target.value.toLowerCase() !== 'y' &&
            e.target.value.toLowerCase() !== 'n' &&
            (newArr[section] = {
              ...inputObject[section],
              string: '',
            });

          section < 7 &&
            (newArr[section] = {
              ...inputObject[section],
              string: e.target.value,
            });
          section < 7 &&
            inputObject[section].string.length >=
              inputObject[section].passLength &&
            setSection(section === maxPage ? maxPage : section * 1 + 1);

          setInputObject(newArr);
        }}
        placeholder="Console:"
      />
    </ColumnMain>
  ) : (
    <Column>CONNECTING TO POINTLESS API.....</Column>
  );
}

export function Page2({ setStoryPage }) {
  return (
    <Column>
      <TitleDark>Thanks for Looking</TitleDark>
      <PDark>I'm going to bed now</PDark>
      <ButtonDark onClick={() => setStoryPage(0)}>Back</ButtonDark>
    </Column>
  );
}

export function Page3({ setStoryPage }) {
  return (
    <Column>
      <TitleDark>Thanks, send a car, I'm coming over</TitleDark>
      <PDark>
        I bet that white screen hurts your eyes now, anyway just need to add a
        note that I'll be moving to Wales at the start of the Year, I mentioned
        it to Jack Lynch and he said you may consider a remote option. Also I'm
        not a fan of coding tests (even though I obviously did this one) or
        interviews but if you want a chat I'm sure Jack has my number.
      </PDark>
      <PDark>Email: tim-simms@hotmail.com</PDark>
      <PDark>Phone: 07598 356580</PDark>
      <PDark>
        GitHub:{' '}
        <a href="https://github.com/SimTimms">https://github.com/SimTimms</a>{' '}
        (Check Out DoodleMeeple and DoodleMeeple-API)
      </PDark>
      <PDark></PDark>
      <ButtonDark onClick={() => setStoryPage(0)}>Back</ButtonDark>
    </Column>
  );
}
