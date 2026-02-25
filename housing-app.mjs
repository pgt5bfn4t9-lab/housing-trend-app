const startYearSlider = document.querySelector("#start-year");
const startYearLabel = document.querySelector("#start-year-label");
const startPriceEl = document.querySelector("#start-price");
const latestPriceEl = document.querySelector("#latest-price");
const totalChangeEl = document.querySelector("#total-change");
const dataBody = document.querySelector("#data-body");
const chart = document.querySelector("#chart");
const chartPanel = document.querySelector(".chart-panel");
const chartTooltip = document.querySelector("#chart-tooltip");
const rawInput = document.querySelector("#raw-input");
const parseBtn = document.querySelector("#parse-btn");
const bgmBtn = document.querySelector("#bgm-btn");
const bgmVolume = document.querySelector("#bgm-volume");
const parseStatus = document.querySelector("#parse-status");
const saveNameInput = document.querySelector("#save-name");
const saveBtn = document.querySelector("#save-btn");
const savedSelect = document.querySelector("#saved-select");
const deleteBtn = document.querySelector("#delete-btn");

const SAVED_KEY = "housingSavedPastesV1";
const DEFAULT_SAVED_NAME = "颐德公馆";
const XIYA_SAVED_NAME = "西雅苑";
const PENGRUI_SAVED_NAME = "鹏瑞金玥湾";
const YIDE_DATA_TEXT = `日期	单价	面积（㎡）	总价	朝向	楼层
日期2026.01.22	126123元	220.42	2780万元	南 西南 北	低楼层(共36层)
日期2024.11.11	199320元	170.58	3400万元	南 北	高楼层(共43层)
日期2024.10.12	200978元	184.1	3700万元	南 北	高楼层(共43层)
日期2023.08.22	244343元	170.58	4168万元	南 北	高楼层(共43层)
日期2023.04.14	252005元	199.6	5030万元	南	高楼层(共43层)
日期2023.03.01	236407元	219.96	5200万元	南	低楼层(共36层)
日期2023.02.22	244990元	199.6	4890万元	南	高楼层(共43层)
日期2023.01.06	209853元	203	4260万元	南	低楼层(共43层)
日期2022.11.13	199034元	207	4120万元	北	低楼层(共42层)
日期2022.03.21	217375元	199.6	4338.8万元	南	中楼层(共43层)
日期2021.05.16	227460元	170.58	3880万元	南 北	中楼层(共43层)
日期2021.03.04	180361元	199.6	3600万元	南 北	高楼层(共43层)
日期2021.01.15	167353元	170	2845万元	南 北	中楼层(共43层)
日期2020.08.21	132752元	219.96	2920万元	南	低楼层(共36层)
日期2020.07.18	110542元	173.69	1920万元	南 北	低楼层(共43层)`;
const XIYA_DATA_TEXT = `西雅苑 3室1厅 91.2平米-广州西雅苑二手房成交
西雅苑 3室1厅 91.2平米
北 | 精装2025.12.19362.8万
低楼层(共28层) 2002年塔楼39781元/平
房屋满五年近地铁
挂牌418万成交周期146天
欧阳家免费咨询
西雅苑 2室2厅 94.62平米-广州西雅苑二手房成交
西雅苑 2室2厅 94.62平米
南 | 其他2025.12.17316万
低楼层(共28层) 1997年板塔结合33397元/平
房屋满五年
挂牌399万成交周期971天
崔晓锋免费咨询
西雅苑 2室2厅 91.2平米-广州西雅苑二手房成交
西雅苑 2室2厅 91.2平米
北 | 精装2025.06.09468万
高楼层(共28层) 1998年塔楼51316元/平
房屋满五年近地铁
挂牌468万成交周期193天
何城免费咨询
西雅苑 3室1厅 88.01平米-广州西雅苑二手房成交
西雅苑 3室1厅 88.01平米
南 | 其他2025.05.16468万
中楼层(共18层) 1998年塔楼53176元/平
房屋满五年近地铁
挂牌468万成交周期41天
何城免费咨询
西雅苑 3室1厅 98.94平米-广州西雅苑二手房成交
西雅苑 3室1厅 98.94平米
南 北 | 简装2025.04.04522万
中楼层(共28层) 1998年塔楼52760元/平
近地铁
挂牌565万成交周期380天
梁柱金免费咨询
西雅苑 3室2厅 98.94平米-广州西雅苑二手房成交
西雅苑 3室2厅 98.94平米
南 北 | 精装2025.03.19556万
高楼层(共28层) 1998年塔楼56196元/平
房屋满两年近地铁
挂牌638万成交周期78天
郑思源免费咨询
西雅苑 3室2厅 109.72平米-广州西雅苑二手房成交
西雅苑 3室2厅 109.72平米
南 | 精装2025.01.24558万
高楼层(共28层) 1998年塔楼50857元/平
房屋满五年近地铁
挂牌595万成交周期101天
潘桂朱免费咨询
西雅苑 4室2厅 114.86平米-广州西雅苑二手房成交
西雅苑 4室2厅 114.86平米
南 | 其他2024.10.15650万
中楼层(共18层) 1998年塔楼56591元/平
房屋满五年近地铁
挂牌768万成交周期52天
谢华建免费咨询
西雅苑 1室0厅 44.2平米-广州西雅苑二手房成交
西雅苑 1室0厅 44.2平米
东南 | 其他2024.08.04208万
高楼层(共28层) 1998年板塔结合47059元/平
房屋满五年
挂牌240万成交周期57天
黄亚妮免费咨询
西雅苑 3室2厅 109.72平米-广州西雅苑二手房成交
西雅苑 3室2厅 109.72平米
南 西南 北 | 简装2024.06.16558万
高楼层(共28层) 1998年塔楼50857元/平
房屋满五年近地铁
挂牌650万成交周期118天
冯洁谊免费咨询
西雅苑 3室2厅 104平米-广州西雅苑二手房成交
西雅苑 3室2厅 104平米
南 | 其他2024.06.11615万
高楼层(共18层) 1998年塔楼59135元/平
近地铁
挂牌750万成交周期45天
戴志杭免费咨询
西雅苑 3室2厅 95.86平米-广州西雅苑二手房成交
西雅苑 3室2厅 95.86平米
南 | 精装2024.06.08533万
高楼层(共18层) 1998年塔楼55602元/平
房屋满五年近地铁
挂牌588万成交周期35天
张苗免费咨询
西雅苑 3室2厅 89.9平米-广州西雅苑二手房成交
西雅苑 3室2厅 89.9平米
南 | 简装2022.10.10708万
高楼层(共28层) 1998年塔楼78755元/平
房屋满五年近地铁
挂牌745万成交周期99天
李钰免费咨询
西雅苑 2室2厅 79.19平米-广州西雅苑二手房成交
西雅苑 2室2厅 79.19平米
西北 | 精装2022.04.16525万
低楼层(共28层) 1998年板塔结合66297元/平
房屋满五年
挂牌549万成交周期88天
梁金艳免费咨询
西雅苑 3室2厅 109.72平米-广州西雅苑二手房成交
西雅苑 3室2厅 109.72平米
南 | 简装2021.07.24830万
中楼层(共28层) 1998年塔楼75648元/平
房屋满五年近地铁
挂牌840万成交周期7天
许家杰免费咨询
西雅苑 3室1厅 91.2平米-广州西雅苑二手房成交
西雅苑 3室1厅 91.2平米
北 | 简装2021.05.02660万
高楼层(共28层) 1998年塔楼72369元/平
房屋满五年近地铁
挂牌715万成交周期11天
崔晓锋免费咨询
西雅苑 3室2厅 109平米-广州西雅苑二手房成交
西雅苑 3室2厅 109平米
南 | 其他2021.01.03733万
低楼层(共28层) 1998年板塔结合67248元/平
房屋满五年
挂牌756万成交周期76天
崔晓锋免费咨询
西雅苑 3室1厅 89平米-广州西雅苑二手房成交
西雅苑 3室1厅 89平米
南 | 其他2020.11.14656万
中楼层(共28层) 塔楼73708元/平
近地铁
挂牌670万成交周期2天
崔晓锋免费咨询
西雅苑 3室2厅 109平米-广州西雅苑二手房成交
西雅苑 3室2厅 109平米
南 北 | 简装2020.08.23641万
中楼层(共28层) 1998年塔楼58808元/平
房屋满五年近地铁
挂牌665万成交周期678天
余淡梅免费咨询
西雅苑 3室1厅 91.2平米-广州西雅苑二手房成交
西雅苑 3室1厅 91.2平米
南 | 其他2020.08.23568万
中楼层(共28层) 1998年塔楼62281元/平
房屋满五年近地铁
挂牌600万成交周期91天
罗雪梅免费咨询
西雅苑 3室2厅 99平米-广州西雅苑二手房成交
西雅苑 3室2厅 99平米
东南 | 简装2019.09.30600万
低楼层(共28层) 1990年塔楼60607元/平
近地铁
挂牌625万成交周期87天
崔晓锋免费咨询
西雅苑 2室2厅 93平米-广州西雅苑二手房成交
西雅苑 2室2厅 93平米
北 | 简装2018.09.10480万
低楼层(共28层) 1998年板塔结合51613元/平
挂牌518万成交周期191天
许家杰免费咨询`;
const PENGRUI_DATA_TEXT = `鹏瑞金玥湾 4室2厅 143.79平米-珠海鹏瑞金玥湾二手房成交
鹏瑞金玥湾 4室2厅 143.79平米
东南 | 精装2025.04.02290.8万
中楼层(共26层) 板楼20224元/平
房屋满两年
挂牌320万成交周期30天
李孔科免费咨询
鹏瑞金玥湾 4室2厅 143.38平米-珠海鹏瑞金玥湾二手房成交
鹏瑞金玥湾 4室2厅 143.38平米
南 北 | 毛坯2025.02.16270万
中楼层(共6层) 暂无数据18832元/平
房屋满两年
挂牌300万成交周期494天
刘统光免费咨询
鹏瑞金玥湾 3室2厅 128.27平米-珠海鹏瑞金玥湾二手房成交
鹏瑞金玥湾 3室2厅 128.27平米
南 | 其他2025.01.23310万
高楼层(共26层) 板楼24168元/平
挂牌360万成交周期325天
肖武平免费咨询
鹏瑞金玥湾 3室2厅 128.24平米-珠海鹏瑞金玥湾二手房成交
鹏瑞金玥湾 3室2厅 128.24平米
南 | 其他2024.12.28210万
低楼层(共26层) 板楼16376元/平
房屋满两年
挂牌245万成交周期386天
刘忠芹免费咨询
鹏瑞金玥湾 3室2厅 99.45平米-珠海鹏瑞金玥湾二手房成交
鹏瑞金玥湾 3室2厅 99.45平米
东南 | 精装2024.08.31183万
中楼层(共26层) 板楼18402元/平
挂牌200万成交周期106天
黄林免费咨询
鹏瑞金玥湾 3室2厅 99.45平米-珠海鹏瑞金玥湾二手房成交
鹏瑞金玥湾 3室2厅 99.45平米
东南 | 其他2024.06.15190万
高楼层(共26层) 板楼19106元/平
挂牌199万成交周期279天
黄业勤免费咨询
鹏瑞金玥湾 5室2厅 143.99平米-珠海鹏瑞金玥湾二手房成交
鹏瑞金玥湾 5室2厅 143.99平米
东南 | 毛坯2024.04.20496万
低楼层(共6层) 板楼34447元/平
挂牌600万成交周期57天
郑妮华免费咨询
鹏瑞金玥湾 4室2厅 193平米-珠海鹏瑞金玥湾二手房成交
鹏瑞金玥湾 4室2厅 193平米
东南 | 精装2024.02.27458万
低楼层(共26层) 板楼23731元/平
挂牌470万成交周期82天
杨豪杰`;

let parsedData = [];
let activePointIndex = -1;
let coasterFrameId = null;
let coasterDistance = 0;
let activeFireworks = [];
const BGM_SRC = "./assets/montagem-miau.mp3";
let bgmAudio = null;
let bgmIsPlaying = false;

init();

function init() {
  ensureSavedItem(DEFAULT_SAVED_NAME, YIDE_DATA_TEXT);
  ensureSavedItem(XIYA_SAVED_NAME, XIYA_DATA_TEXT);
  ensureSavedItem(PENGRUI_SAVED_NAME, PENGRUI_DATA_TEXT);
  parseBtn.addEventListener("click", onParse);
  bgmBtn.addEventListener("click", toggleBgm);
  bgmVolume.addEventListener("input", onBgmVolumeChange);
  saveBtn.addEventListener("click", saveCurrentPaste);
  savedSelect.addEventListener("change", loadSelectedPaste);
  deleteBtn.addEventListener("click", deleteSelectedPaste);
  startYearSlider.addEventListener("input", render);
  renderSavedOptions();
  loadDefaultSavedData();
  initBgm();
}

function initBgm() {
  bgmAudio = new Audio(BGM_SRC);
  bgmAudio.loop = true;
  bgmAudio.preload = "auto";
  onBgmVolumeChange();
  tryAutoPlayBgm();
}

async function tryAutoPlayBgm() {
  if (!bgmAudio) return;
  try {
    await bgmAudio.play();
    setBgmPlayingUI(true);
  } catch {
    setBgmPlayingUI(false);
    parseStatus.classList.remove("error");
    parseStatus.textContent = "自动播放被浏览器限制，请点击“播放BGM”。";
  }
}

async function toggleBgm() {
  if (!bgmAudio) return;
  if (!bgmIsPlaying) {
    try {
      await bgmAudio.play();
      setBgmPlayingUI(true);
    } catch {
      parseStatus.classList.add("error");
      parseStatus.textContent = "BGM播放失败，请确认 ./assets/montagem-miau.mp3 文件存在。";
    }
  } else {
    bgmAudio.pause();
    setBgmPlayingUI(false);
  }
}

function setBgmPlayingUI(playing) {
  bgmIsPlaying = playing;
  bgmBtn.textContent = playing ? "暂停BGM" : "播放BGM";
  bgmBtn.classList.toggle("playing", playing);
}

function onBgmVolumeChange() {
  if (!bgmAudio) return;
  const value = Number(bgmVolume.value) / 100;
  bgmAudio.volume = Math.max(0, Math.min(1, value));
}

function loadDefaultSavedData() {
  const preferred = getSavedItems().find((item) => item.name === DEFAULT_SAVED_NAME);
  if (preferred) {
    if (savedSelect) savedSelect.value = preferred.id;
    rawInput.value = preferred.rawText;
    saveNameInput.value = preferred.name;
    onParse();
    parseStatus.classList.remove("error");
    parseStatus.textContent = `已加载保存数据“${preferred.name}”。`;
    return;
  }

  const demoText = YIDE_DATA_TEXT;
  upsertSavedItem(DEFAULT_SAVED_NAME, demoText);
  renderSavedOptions();
  const saved = getSavedItems().find((item) => item.name === DEFAULT_SAVED_NAME);
  if (saved) savedSelect.value = saved.id;
  rawInput.value = demoText;
  saveNameInput.value = DEFAULT_SAVED_NAME;
  onParse();
  parseStatus.classList.remove("error");
  parseStatus.textContent = `已将示例数据写入保存名称“${DEFAULT_SAVED_NAME}”。`;
}

function upsertSavedItem(name, rawText) {
  const items = getSavedItems();
  const existing = items.find((x) => x.name === name);
  const now = Date.now();

  if (existing) {
    existing.rawText = rawText;
    existing.updatedAt = now;
  } else {
    items.push({
      id: `${now}-${Math.random().toString(36).slice(2, 7)}`,
      name,
      rawText,
      updatedAt: now,
    });
  }
  setSavedItems(items);
}

function ensureSavedItem(name, rawText) {
  const items = getSavedItems();
  const existing = items.find((x) => x.name === name);
  if (!existing || existing.rawText !== rawText) {
    upsertSavedItem(name, rawText);
  }
}

function onParse() {
  const rows = extractDatePriceRows(rawInput.value);
  if (rows.length < 2) {
    parseStatus.textContent = "解析到的数据不足。请确认文本中包含日期和“元/平”。";
    parseStatus.classList.add("error");
    return;
  }

  parseStatus.classList.remove("error");
  parseStatus.textContent = `已从粘贴内容中解析出 ${rows.length} 条记录。`;

  parsedData = rows.sort((a, b) => a.date.localeCompare(b.date));

  const years = parsedData.map((d) => Number(d.date.slice(0, 4)));
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);
  startYearSlider.min = String(minYear);
  startYearSlider.max = String(maxYear);
  startYearSlider.value = String(minYear);

  render();
}

function getSavedItems() {
  let raw = null;
  try {
    raw = localStorage.getItem(SAVED_KEY);
  } catch {
    return [];
  }
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function setSavedItems(items) {
  try {
    localStorage.setItem(SAVED_KEY, JSON.stringify(items));
  } catch {
    parseStatus.textContent = "浏览器存储空间不足，已跳过保存。";
    parseStatus.classList.add("error");
  }
}

function renderSavedOptions() {
  const items = getSavedItems();
  savedSelect.innerHTML = "";

  if (!items.length) {
    const opt = document.createElement("option");
    opt.value = "";
    opt.textContent = "暂无已保存数据";
    savedSelect.append(opt);
    savedSelect.disabled = true;
    deleteBtn.disabled = true;
    return;
  }

  savedSelect.disabled = false;
  deleteBtn.disabled = false;

  items
    .sort((a, b) => b.updatedAt - a.updatedAt)
    .forEach((item) => {
      const opt = document.createElement("option");
      opt.value = item.id;
      opt.textContent = item.name;
      savedSelect.append(opt);
    });
}

function saveCurrentPaste() {
  const name = saveNameInput.value.trim();
  const text = rawInput.value.trim();

  if (!name) {
    parseStatus.textContent = "请先输入保存名称。";
    parseStatus.classList.add("error");
    return;
  }
  if (!text) {
    parseStatus.textContent = "请先粘贴内容，再进行保存。";
    parseStatus.classList.add("error");
    return;
  }

  const items = getSavedItems();
  const existing = items.find((x) => x.name === name);
  const now = Date.now();

  if (existing) {
    existing.rawText = text;
    existing.updatedAt = now;
  } else {
    items.push({
      id: `${now}-${Math.random().toString(36).slice(2, 7)}`,
      name,
      rawText: text,
      updatedAt: now,
    });
  }

  setSavedItems(items);
  renderSavedOptions();
  savedSelect.value = existing ? existing.id : items[items.length - 1].id;
  parseStatus.classList.remove("error");
  parseStatus.textContent = `已保存“${name}”。`;
}

function loadSelectedPaste() {
  const id = savedSelect.value;
  if (!id) return;
  const item = getSavedItems().find((x) => x.id === id);
  if (!item) return;

  rawInput.value = item.rawText;
  saveNameInput.value = item.name;
  onParse();
  parseStatus.classList.remove("error");
  parseStatus.textContent = `已加载“${item.name}”。`;
}

function deleteSelectedPaste() {
  const id = savedSelect.value;
  if (!id) return;
  const items = getSavedItems();
  const target = items.find((x) => x.id === id);
  const next = items.filter((x) => x.id !== id);
  setSavedItems(next);
  renderSavedOptions();
  parseStatus.classList.remove("error");
  parseStatus.textContent = target ? `已删除“${target.name}”。` : "已删除所选数据。";
}

function extractDatePriceRows(text) {
  const tabularRows = extractTabularRows(text);
  if (tabularRows.length) return tabularRows;

  const dateRegex = /(\d{4})[.\/-年](\d{1,2})(?:[.\/-月](\d{1,2}))?/g;
  const unitPriceRegex = /(\d{4,7}(?:\.\d+)?)\s*元(?:\s*[\/／]\s*(?:平|平米|㎡|m²))?/;

  const dates = Array.from(text.matchAll(dateRegex)).map((m) => ({
    index: m.index,
    year: Number(m[1]),
    month: Number(m[2]),
    day: m[3] ? Number(m[3]) : 1,
  }));

  if (!dates.length) return [];

  const out = [];

  for (let i = 0; i < dates.length; i += 1) {
    const d = dates[i];
    const nextDate = dates[i + 1];
    const blockEnd = nextDate ? nextDate.index : text.length;
    const block = text.slice(d.index, blockEnd);
    if (isParkingRecord(block)) continue;
    const unitPriceMatch = block.match(unitPriceRegex);
    if (!unitPriceMatch) continue;

    const y = String(d.year).padStart(4, "0");
    const m = String(d.month).padStart(2, "0");
    const day = String(d.day).padStart(2, "0");
    const details = extractHouseDetails(block, d);

    out.push({
      date: `${y}-${m}-${day}`,
      price: Number(unitPriceMatch[1]),
      area: details.area,
      totalPrice: details.totalPrice,
      direction: details.direction,
      floor: details.floor,
    });
  }

  return out;
}

function isParkingRecord(textBlock) {
  return /车位|车库|停车位|车位房/.test(textBlock);
}

function extractTabularRows(text) {
  const lines = text
    .replace(/\r/g, "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const rows = [];
  lines.forEach((line) => {
    if (/^日期\s*[\t ]*单价/.test(line)) return;
    if (!line.includes("\t")) return;
    if (isParkingRecord(line)) return;

    const cols = line.split("\t").map((s) => s.trim());
    if (cols.length < 6) return;

    const dateMatch = cols[0].match(/(\d{4})[.\/-年](\d{1,2})(?:[.\/-月](\d{1,2}))?/);
    const priceMatch = cols[1].match(/(\d+(?:\.\d+)?)\s*元/);
    if (!dateMatch || !priceMatch) return;

    const y = dateMatch[1].padStart(4, "0");
    const m = String(Number(dateMatch[2])).padStart(2, "0");
    const d = String(Number(dateMatch[3] || "1")).padStart(2, "0");

    const areaMatch = cols[2].match(/(\d+(?:\.\d+)?)/);
    const totalMatch = cols[3].match(/(\d+(?:\.\d+)?)\s*万/);
    const floorMatch = cols[5].match(/(高楼层|中楼层|低楼层|顶层|底层|高层|中层|低层)(?:[（(][^）)]*[）)])?/);

    rows.push({
      date: `${y}-${m}-${d}`,
      price: Number(priceMatch[1]),
      area: areaMatch ? `${areaMatch[1]}㎡` : "-",
      totalPrice: totalMatch ? `${totalMatch[1]}万` : "-",
      direction: cols[4] || "-",
      floor: floorMatch ? floorMatch[0] : cols[5] || "-",
    });
  });

  return rows;
}

function extractHouseDetails(chunk, dateInfo) {
  const columnDetails = extractColumnStyleDetails(chunk);
  if (columnDetails) return columnDetails;

  const areaMatch = chunk.match(/(\d+(?:\.\d+)?)\s*(?:平米|㎡|m²)/);
  const exactDatePattern = `${dateInfo.year}[.\\/-年]0?${dateInfo.month}(?:[.\\/-月]0?${dateInfo.day})?(?:日)?`;
  const dateFollowedPriceRegex = new RegExp(`${exactDatePattern}\\s*(\\d+(?:\\.\\d+)?)\\s*万`);
  const dateInTextRegex = new RegExp(
    exactDatePattern
  );
  const chunkAfterDate = chunk.replace(dateInTextRegex, " ");
  const dateFollowedPriceMatch = chunk.match(dateFollowedPriceRegex);
  const totalPriceMatch =
    dateFollowedPriceMatch ||
    chunkAfterDate.match(/成交总价\s*(\d+(?:\.\d+)?)\s*万/) ||
    chunkAfterDate.match(/总价\s*(\d+(?:\.\d+)?)\s*万/) ||
    chunkAfterDate.match(/(\d+(?:\.\d+)?)\s*万/);
  const directionMatch = chunk.match(/(东南|东北|西南|西北|东|南|西|北)(?:\s+(东南|东北|西南|西北|东|南|西|北))?/);
  const floorMatch = chunk.match(/(高楼层|中楼层|低楼层|顶层|底层|高层|中层|低层)(?:[（(][^）)]*[）)])?/);

  return {
    area: areaMatch ? `${areaMatch[1]}㎡` : "-",
    totalPrice: totalPriceMatch ? `${totalPriceMatch[1]}万` : "-",
    direction: directionMatch ? `${directionMatch[1]}${directionMatch[2] ? ` ${directionMatch[2]}` : ""}` : "-",
    floor: floorMatch ? floorMatch[0] : "-",
  };
}

function extractColumnStyleDetails(chunk) {
  const cols = chunk
    .replace(/\r/g, "")
    .split(/\t+/)
    .map((s) => s.trim())
    .filter(Boolean);

  if (cols.length < 5) return null;

  const areaRaw = cols[2] || "";
  const totalRaw = cols[3] || "";
  const directionRaw = cols[4] || "";
  const floorRaw = cols[5] || "";

  const areaMatch = areaRaw.match(/(\d+(?:\.\d+)?)/);
  const totalMatch = totalRaw.match(/(\d+(?:\.\d+)?)\s*万/);
  const floorMatch = floorRaw.match(/(高楼层|中楼层|低楼层|顶层|底层|高层|中层|低层)(?:[（(][^）)]*[）)])?/);

  return {
    area: areaMatch ? `${areaMatch[1]}㎡` : "-",
    totalPrice: totalMatch ? `${totalMatch[1]}万` : "-",
    direction: directionRaw || "-",
    floor: floorMatch ? floorMatch[0] : floorRaw || "-",
  };
}

function render() {
  if (!parsedData.length) return;

  const startYear = Number(startYearSlider.value);
  startYearLabel.textContent = String(startYear);

  const data = parsedData.filter((p) => Number(p.date.slice(0, 4)) >= startYear);
  if (data.length < 2) return;

  const first = data[0];
  const last = data[data.length - 1];
  const peak = data.reduce((prev, cur) => (cur.price > prev.price ? cur : prev), data[0]);

  startPriceEl.textContent = `${formatCurrency(peak.price)}/㎡`;
  startPriceEl.style.color = "#d43b3b";
  latestPriceEl.textContent = `${formatCurrency(last.price)}/㎡`;

  const drawdown = ((last.price - peak.price) / peak.price) * 100;
  totalChangeEl.textContent = `${drawdown.toFixed(2)}%`;
  totalChangeEl.style.color = drawdown < 0 ? "#8f2121" : "#1f6f5f";

  renderChart(data);
  renderTable([...data].reverse());
}

function renderChart(data) {
  const pad = { top: 24, right: 30, bottom: 36, left: 72 };
  const width = 900;
  const height = 380;
  const innerW = width - pad.left - pad.right;
  const innerH = height - pad.top - pad.bottom;

  const prices = data.map((d) => d.price);
  const min = Math.min(...prices) * 0.985;
  const max = Math.max(...prices) * 1.015;
  const plotDates = buildPlotDates(data);
  const dates = data.map((d) => new Date(d.date));
  const startYear = dates[0].getFullYear();
  const endYear = dates[dates.length - 1].getFullYear();
  // Use full-year domain for consistent year spacing across different compounds.
  const minTime = new Date(`${startYear}-01-01T00:00:00`).getTime();
  const maxTime = new Date(`${endYear + 1}-01-01T00:00:00`).getTime();
  const x = (dateValue) => {
    const t = dateValue.getTime();
    const ratio = (t - minTime) / (maxTime - minTime || 1);
    return pad.left + ratio * innerW;
  };
  const y = (price) => pad.top + ((max - price) / (max - min || 1)) * innerH;

  const points = data.map((d, idx) => ({
    idx,
    x: x(plotDates[idx]),
    y: y(d.price),
    row: d,
  }));
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(" ");

  const yTicks = 5;
  const grid = Array.from({ length: yTicks + 1 }, (_, i) => {
    const p = min + ((max - min) * i) / yTicks;
    const py = y(p);
    return `
      <line class="grid-line" x1="${pad.left}" y1="${py}" x2="${width - pad.right}" y2="${py}" />
      <text x="10" y="${py + 4}" fill="#637581" font-size="12">${shortCurrency(p)}</text>
    `;
  }).join("");

  const maxPrice = Math.max(...data.map((d) => d.price));
  const minPrice = Math.min(...data.map((d) => d.price));
  const maxPoints = points.filter((p) => p.row.price === maxPrice);
  const minPoints = points.filter((p) => p.row.price === minPrice);
  const dots = points
    .map((point) => {
      const isHighest = point.row.price === maxPrice;
      const isLowest = point.row.price === minPrice;
      const classes = `data-point${isHighest ? " highest-point" : ""}${isLowest ? " lowest-point" : ""}`;
      return `<circle
        class="${classes}"
        cx="${point.x}"
        cy="${point.y}"
        r="3"
        data-date="${encodeForAttr(point.row.date)}"
        data-price="${encodeForAttr(`${formatCurrency(point.row.price)}/㎡`)}"
        data-area="${encodeForAttr(point.row.area || "-")}"
        data-total="${encodeForAttr(point.row.totalPrice || "-")}"
        data-direction="${encodeForAttr(point.row.direction || "-")}"
        data-floor="${encodeForAttr(point.row.floor || "-")}"
        data-index="${point.idx ?? ""}"
      />`;
    })
    .join("");

  const extremePoints = [...maxPoints, ...minPoints.filter((p) => p.row.price !== maxPrice)];
  const extremeOverlays = extremePoints
    .map((point) => {
      const isHighest = point.row.price === maxPrice;
      const className = isHighest ? "extreme-point max-overlay" : "extreme-point min-overlay";
      return `<circle class="${className}" cx="${point.x}" cy="${point.y}" r="${isHighest ? 4.5 : 5}" />`;
    })
    .join("");

  const extremeLabels = extremePoints
    .map((point) => {
      const isHighest = point.row.price === maxPrice;
      const labelClass = isHighest ? "price-label highest-label" : "price-label lowest-label";
      const labelX = point.x + 18;
      const labelY = point.y > height - 34 ? point.y - 10 : point.y + 4;
      return `<text class="${labelClass}" x="${labelX}" y="${labelY}">${shortCurrency(point.row.price)}</text>`;
    })
    .join("");

  const tickMap = new Map();
  for (let year = startYear; year <= endYear; year += 1) {
    const jan1Time = new Date(`${year}-01-01`).getTime();
    tickMap.set(year, jan1Time);
  }

  const xTicks = [...tickMap.entries()]
    .map(([year, time]) => {
      const px = x(new Date(time));
      return `
        <line class="axis" x1="${px}" y1="${height - pad.bottom}" x2="${px}" y2="${height - pad.bottom + 5}" />
        <text x="${px}" y="${height - 10}" text-anchor="middle" fill="#637581" font-size="12">${year}</text>
      `;
    })
    .join("");

  chart.innerHTML = `
    ${grid}
    <line class="axis" x1="${pad.left}" y1="${height - pad.bottom}" x2="${width - pad.right}" y2="${height - pad.bottom}" />
    <line class="axis" x1="${pad.left}" y1="${pad.top}" x2="${pad.left}" y2="${height - pad.bottom}" />
    ${xTicks}
    <path id="trend-path" class="path" d="${path}" />
    ${dots}
    ${extremeOverlays}
    ${extremeLabels}
    <g id="fireworks-layer"></g>
    <g id="coaster-cart" class="coaster-cart" transform="translate(${points[0].x} ${points[0].y}) rotate(0)">
      <path class="coaster-body" d="M -34 8 L -30 -10 L 18 -10 Q 32 -9 34 1 L 30 8 Z"></path>
      <rect class="coaster-bar" x="-22" y="-2" width="40" height="4" rx="2"></rect>
      <circle class="coaster-wheel" cx="-18" cy="14" r="5"></circle>
      <circle class="coaster-wheel" cx="18" cy="14" r="5"></circle>
      <g class="cat-rider" transform="translate(0,-18)">
        <text class="cat-emoji" x="0" y="-1.2">😻</text>
      </g>
    </g>
    <text x="${width - 230}" y="${height - 22}" fill="#637581" font-size="12">${data[0].date.slice(0, 7)} 至 ${data[data.length - 1].date.slice(0, 7)}</text>
  `;
  bindChartTooltip(points);
  startCoasterAnimation(points, maxPrice);
}

function buildPlotDates(rows) {
  const baseDates = rows.map((row) => new Date(`${row.date}T12:00:00`));
  const groups = new Map();

  rows.forEach((row, idx) => {
    const arr = groups.get(row.date) || [];
    arr.push(idx);
    groups.set(row.date, arr);
  });

  const stepMinutes = 90;
  groups.forEach((indexes) => {
    if (indexes.length < 2) return;
    const center = (indexes.length - 1) / 2;
    indexes.forEach((dataIdx, pos) => {
      const offsetMinutes = (pos - center) * stepMinutes;
      baseDates[dataIdx] = new Date(baseDates[dataIdx].getTime() + offsetMinutes * 60 * 1000);
    });
  });

  return baseDates;
}

function renderTable(rows) {
  dataBody.innerHTML = rows
    .map((row) => {
      return `
        <tr>
          <td>${row.date}</td>
          <td>${formatCurrency(row.price)}/㎡</td>
          <td>${row.area || "-"}</td>
          <td>${row.totalPrice || "-"}</td>
          <td>${row.direction || "-"}</td>
          <td>${row.floor || "-"}</td>
        </tr>
      `;
    })
    .join("");
}

function formatCurrency(value) {
  return new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY",
    maximumFractionDigits: 0,
  }).format(value);
}

function shortCurrency(value) {
  const rounded = Math.round(value);
  return `${(rounded / 10000).toFixed(1)}万`;
}

function encodeForAttr(value) {
  return encodeURIComponent(value);
}

function bindChartTooltip(points) {
  const pointEls = chart.querySelectorAll(".data-point");
  chart.onmouseleave = hideChartTooltip;
  chart.onmousemove = (event) => {
    if (!points.length) return;
    const svgX = getSvgXFromMouse(event);
    const nearestIndex = getNearestPointIndex(points, svgX);
    const nearestEl = chart.querySelector(`.data-point[data-index="${nearestIndex}"]`);
    if (!nearestEl) return;
    showChartTooltip(nearestEl);
    setActivePoint(nearestIndex);
  };

  pointEls.forEach((point) => {
    point.addEventListener("mouseenter", () => showChartTooltip(point));
    point.addEventListener("mousemove", () => showChartTooltip(point));
    point.addEventListener("click", () => showChartTooltip(point));
    point.addEventListener("mouseenter", () => setActivePoint(Number(point.dataset.index || -1)));
  });
}

function showChartTooltip(point) {
  if (!chartTooltip || !chartPanel) return;

  const date = decodeURIComponent(point.dataset.date || "-");
  const price = decodeURIComponent(point.dataset.price || "-");
  const area = decodeURIComponent(point.dataset.area || "-");
  const total = decodeURIComponent(point.dataset.total || "-");
  const direction = decodeURIComponent(point.dataset.direction || "-");
  const floor = decodeURIComponent(point.dataset.floor || "-");

  chartTooltip.innerHTML = `
    <div class="title">${date}</div>
    <div>单价：${price}</div>
    <div>面积：${area}</div>
    <div>总价：${total}</div>
    <div>朝向：${direction}</div>
    <div>楼层：${floor}</div>
  `;
  chartTooltip.style.display = "block";

  const svgWidth = 900;
  const svgHeight = 380;
  const cx = Number(point.getAttribute("cx"));
  const cy = Number(point.getAttribute("cy"));
  const chartRect = chart.getBoundingClientRect();
  const panelRect = chartPanel.getBoundingClientRect();
  const px = chartRect.left - panelRect.left + (cx / svgWidth) * chartRect.width;
  const py = chartRect.top - panelRect.top + (cy / svgHeight) * chartRect.height;

  let left = px + 12;
  let top = py - 10;
  const tipRect = chartTooltip.getBoundingClientRect();
  const maxLeft = chartPanel.clientWidth - tipRect.width - 8;
  if (left > maxLeft) left = Math.max(8, px - tipRect.width - 12);
  if (top - tipRect.height < 4) top = py + 12;

  chartTooltip.style.left = `${left}px`;
  chartTooltip.style.top = `${top}px`;
}

function hideChartTooltip() {
  if (!chartTooltip) return;
  chartTooltip.style.display = "none";
  clearActivePoint();
}

function getSvgXFromMouse(event) {
  const rect = chart.getBoundingClientRect();
  const ratioX = (event.clientX - rect.left) / rect.width;
  return Math.max(0, Math.min(900, ratioX * 900));
}

function getNearestPointIndex(points, svgX) {
  let nearestIndex = 0;
  let nearestDelta = Math.abs(points[0].x - svgX);
  for (let i = 1; i < points.length; i += 1) {
    const delta = Math.abs(points[i].x - svgX);
    if (delta < nearestDelta) {
      nearestDelta = delta;
      nearestIndex = i;
    }
  }
  return nearestIndex;
}

function setActivePoint(index) {
  if (activePointIndex === index) return;
  clearActivePoint();
  const el = chart.querySelector(`.data-point[data-index="${index}"]`);
  if (!el) return;
  el.classList.add("active-point");
  activePointIndex = index;
}

function clearActivePoint() {
  if (activePointIndex < 0) return;
  const prevEl = chart.querySelector(`.data-point[data-index="${activePointIndex}"]`);
  if (prevEl) prevEl.classList.remove("active-point");
  activePointIndex = -1;
}

function startCoasterAnimation(points, maxPrice) {
  if (coasterFrameId) cancelAnimationFrame(coasterFrameId);
  activeFireworks = [];

  const pathEl = chart.querySelector("#trend-path");
  const cart = chart.querySelector("#coaster-cart");
  const fireworksLayer = chart.querySelector("#fireworks-layer");
  if (!pathEl || !cart || !fireworksLayer) return;

  const total = pathEl.getTotalLength();
  const speed = 1.4;
  const peakPoints = points.filter((p) => p.row.price === maxPrice);
  let lastFireworkAt = 0;

  const animate = () => {
    coasterDistance = (coasterDistance + speed) % total;
    const p = pathEl.getPointAtLength(coasterDistance);
    const p2 = pathEl.getPointAtLength((coasterDistance + 1) % total);
    const catEmoji = cart.querySelector(".cat-emoji");
    if (p2.y > p.y) {
      cart.classList.add("downhill");
      if (catEmoji) catEmoji.textContent = "🙀";
    } else {
      cart.classList.remove("downhill");
      if (catEmoji) catEmoji.textContent = "😻";
    }
    const angle = (Math.atan2(p2.y - p.y, p2.x - p.x) * 180) / Math.PI;
    cart.setAttribute("transform", `translate(${p.x} ${p.y}) rotate(${angle})`);
    maybeTriggerFirework(p, peakPoints, fireworksLayer, () => {
      const now = performance.now();
      if (now - lastFireworkAt < 700) return false;
      lastFireworkAt = now;
      return true;
    });
    updateFireworks(fireworksLayer);
    coasterFrameId = requestAnimationFrame(animate);
  };

  animate();
}

function maybeTriggerFirework(cartPoint, peakPoints, layer, cooldownCheck) {
  const triggerDistance = 7.5;
  for (const peak of peakPoints) {
    const dx = cartPoint.x - peak.x;
    const dy = cartPoint.y - peak.y;
    if (Math.hypot(dx, dy) <= triggerDistance) {
      if (!cooldownCheck()) return;
      spawnFirework(layer, peak.x, peak.y);
      return;
    }
  }
}

function spawnFirework(layer, x, y) {
  const colors = ["#ff4d4f", "#ffd666", "#73d13d", "#40a9ff", "#9254de", "#ffa940"];
  const count = 18;
  const ns = "http://www.w3.org/2000/svg";
  for (let i = 0; i < count; i += 1) {
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.2;
    const speed = 1.5 + Math.random() * 2.6;
    const particle = document.createElementNS(ns, "circle");
    particle.setAttribute("cx", String(x));
    particle.setAttribute("cy", String(y));
    particle.setAttribute("r", String(1.8 + Math.random() * 1.4));
    particle.setAttribute("fill", colors[i % colors.length]);
    layer.appendChild(particle);
    activeFireworks.push({
      el: particle,
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 0,
      maxLife: 26 + Math.random() * 16,
    });
  }
}

function updateFireworks(layer) {
  const next = [];
  for (const p of activeFireworks) {
    p.life += 1;
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.06;
    p.vx *= 0.988;
    const alpha = Math.max(0, 1 - p.life / p.maxLife);
    p.el.setAttribute("cx", String(p.x));
    p.el.setAttribute("cy", String(p.y));
    p.el.setAttribute("opacity", alpha.toFixed(3));
    if (p.life < p.maxLife) {
      next.push(p);
    } else {
      layer.removeChild(p.el);
    }
  }
  activeFireworks = next;
}
