const DEFAULT_MEMBERS = [
  { id: 'm1', name: 'Peter Tornatore', title: 'VP, Estimating', department: 'Pre Construction' },
  { id: 'm2', name: 'Robert Russo', title: 'VP, Interiors', department: 'Pre Construction' },
  { id: 'm3', name: 'Brian Fusco', title: 'Estimating Team Lead', department: 'Pre Construction' },
  { id: 'm4', name: 'Bruce Cohan', title: 'Project Director', department: 'Construction' },
  { id: 'm5', name: 'Robert Rydstrom', title: 'Field Operations Director', department: 'Construction' },
  { id: 'm6', name: 'Stephen Dunn', title: 'Estimator', department: 'Pre Construction' },
  { id: 'm7', name: 'Sal LaBarca', title: 'Project Manager / Full Time Field Supervisor', department: 'Construction' },
  { id: 'm8', name: 'Presley Gaetano', title: 'Asst Superintendent / Asst Project Manager', department: 'Construction' },
  { id: 'm9', name: 'Gianny Baidal', title: 'Virtual Design & Construction', department: 'Corporate Services' },
  { id: 'm10', name: 'Michael Kersten', title: 'Permitting & Expediting', department: 'Corporate Services' },
  { id: 'm11', name: 'John Driscoll', title: 'Structural Engineering', department: 'Corporate Services' },
  { id: 'm12', name: 'David Mullen', title: 'Mission Critical', department: 'Corporate Services' },
  { id: 'm13', name: 'Eve Vick', title: 'Director of Scheduling', department: 'Corporate Services' },
  { id: 'm14', name: 'Thomas Gallagher', title: 'MEPS & Technology', department: 'Corporate Services' },
  { id: 'm15', name: 'Celia Seigerman-Levit', title: 'Risk Management', department: 'Corporate Services' },
  { id: 'm16', name: 'Dwayne Carter', title: 'Environmental Health & Safety', department: 'Corporate Services' },
  { id: 'm17', name: 'Marc Reissman', title: 'Principal', department: 'Introduction' },
  { id: 'm18', name: 'Gerald Flamio', title: 'Project Director', department: 'Introduction' },
  { id: 'm19', name: 'Rehman Malik', title: 'Senior Project Manager', department: 'Introduction' },
  { id: 'm20', name: 'Natalia Caruso', title: 'Estimating Manager', department: 'Introduction' },
  { id: 'm21', name: 'Ariana Majstorovic', title: 'Project Estimator', department: 'Introduction' },
  { id: 'm22', name: 'Louis Cangiano', title: 'Superintendent', department: 'Introduction' },
  { id: 'm23', name: 'Dan Abolafia', title: 'Superintendent', department: 'Introduction' }
].map((member, index) => ({
  ...member,
  photo: member.photo || createAvatar(member.name, index)
}));

const PRESETS = {
  preconstruction: {
    type: 'preconstruction',
    title: 'PRE-CONSTRUCTION PROJECT TEAM',
    bgColor: '#e5e5e5',
    accentColor: '#3f71c4',
    headingColor: '#0f131a',
    headingSize: 58,
    headingFont: 'Sora',
    headingBold: true,
    cardBg: '#ffffff',
    cardTextColor: '#101820',
    cardSubColor: '#263342',
    outlineColor: '#d8dde3',
    outlineWidth: 1,
    cardRadius: 10,
    showOutline: true,
    showShadow: true,
    nameSize: 16,
    roleSize: 11,
    nameBold: true,
    cardStyle: 'classic',
    bgImage: ''
  },
  construction: {
    type: 'construction',
    title: 'CONSTRUCTION PROJECT TEAM',
    bgColor: '#e5e5e5',
    accentColor: '#be1e2d',
    headingColor: '#10131a',
    headingSize: 58,
    headingFont: 'Sora',
    headingBold: true,
    cardBg: '#ffffff',
    cardTextColor: '#11181f',
    cardSubColor: '#2e3947',
    outlineColor: '#dfd4d7',
    outlineWidth: 1,
    cardRadius: 10,
    showOutline: true,
    showShadow: true,
    nameSize: 16,
    roleSize: 11,
    nameBold: true,
    cardStyle: 'classic',
    bgImage: ''
  },
  corporate: {
    type: 'corporate',
    title: 'JRM CORPORATE SERVICES',
    bgColor: '#ece9ea',
    accentColor: '#be1e2d',
    headingColor: '#111822',
    headingSize: 54,
    headingFont: 'Sora',
    headingBold: true,
    cardBg: '#ffffff',
    cardTextColor: '#121b25',
    cardSubColor: '#2b3a4a',
    outlineColor: '#f0f0f0',
    outlineWidth: 1,
    cardRadius: 48,
    showOutline: false,
    showShadow: true,
    nameSize: 16,
    roleSize: 11,
    nameBold: true,
    cardStyle: 'pill',
    bgImage: ''
  },
  introduction: {
    type: 'introduction',
    title: 'JRM INTRODUCTIONS',
    bgColor: '#e0e0e2',
    accentColor: '#be1e2d',
    headingColor: '#141b23',
    headingSize: 52,
    headingFont: 'Sora',
    headingBold: false,
    cardBg: '#ffffff',
    cardTextColor: '#11171f',
    cardSubColor: '#2f3b48',
    outlineColor: '#121b25',
    outlineWidth: 2,
    cardRadius: 12,
    showOutline: true,
    showShadow: false,
    nameSize: 15,
    roleSize: 11,
    nameBold: true,
    cardStyle: 'intro',
    bgImage: ''
  }
};

function normalizeSettings(settings) {
  const presetKey = settings?.type && PRESETS[settings.type] ? settings.type : 'preconstruction';
  return {
    ...PRESETS[presetKey],
    ...(settings || {})
  };
}

const state = {
  members: structuredClone(DEFAULT_MEMBERS),
  rows: [],
  nodes: {},
  manualLinks: [],
  selectedCardId: null,
  nodeSequence: 1,
  settings: normalizeSettings(structuredClone(PRESETS.preconstruction)),
  autoConnect: true,
  draggingNodeId: null
};

const dom = {
  libraryList: document.getElementById('libraryList'),
  memberSearch: document.getElementById('memberSearch'),
  memberDepartmentFilter: document.getElementById('memberDepartmentFilter'),
  newMemberName: document.getElementById('newMemberName'),
  newMemberTitle: document.getElementById('newMemberTitle'),
  newMemberDepartment: document.getElementById('newMemberDepartment'),
  newMemberPhoto: document.getElementById('newMemberPhoto'),
  addMemberBtn: document.getElementById('addMemberBtn'),
  cardLayer: document.getElementById('cardLayer'),
  connectorLayer: document.getElementById('connectorLayer'),
  slide: document.getElementById('slidePreview'),
  slideHeader: document.getElementById('slideHeader'),
  slideTitle: document.getElementById('slideTitle'),
  slideType: document.getElementById('slideType'),
  titleInput: document.getElementById('titleInput'),
  bgColorInput: document.getElementById('bgColorInput'),
  accentColorInput: document.getElementById('accentColorInput'),
  headingColorInput: document.getElementById('headingColorInput'),
  headingSizeInput: document.getElementById('headingSizeInput'),
  headingFontInput: document.getElementById('headingFontInput'),
  headingBoldInput: document.getElementById('headingBoldInput'),
  cardBgInput: document.getElementById('cardBgInput'),
  nameSizeInput: document.getElementById('nameSizeInput'),
  titleSizeInput: document.getElementById('titleSizeInput'),
  nameBoldInput: document.getElementById('nameBoldInput'),
  cardShadowInput: document.getElementById('cardShadowInput'),
  cardOutlineInput: document.getElementById('cardOutlineInput'),
  cardRadiusInput: document.getElementById('cardRadiusInput'),
  backgroundImageInput: document.getElementById('backgroundImageInput'),
  autoConnectToggle: document.getElementById('autoConnectToggle'),
  clearCanvasBtn: document.getElementById('clearCanvasBtn'),
  autoSortBtn: document.getElementById('autoSortBtn'),
  exportPngBtn: document.getElementById('exportPngBtn'),
  exportPdfBtn: document.getElementById('exportPdfBtn'),
  exportPptxBtn: document.getElementById('exportPptxBtn'),
  exportHtmlBtn: document.getElementById('exportHtmlBtn'),
  statusText: document.getElementById('statusText'),
  previewHost: document.getElementById('previewHost')
};

function createAvatar(name, seed = 0) {
  const initials = (name || 'TM')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');
  const hue = (seed * 47 + 13) % 360;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="180"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="hsl(${hue} 65% 72%)"/><stop offset="100%" stop-color="hsl(${(hue + 40) % 360} 50% 48%)"/></linearGradient></defs><rect width="220" height="180" rx="18" fill="url(#g)"/><text x="50%" y="57%" text-anchor="middle" font-family="Manrope" font-size="64" font-weight="800" fill="rgba(255,255,255,0.92)">${initials}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function slug(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function notify(message) {
  dom.statusText.textContent = message;
}

function getMemberById(memberId) {
  return state.members.find((member) => member.id === memberId);
}

function currentCardSize() {
  if (state.settings.cardStyle === 'pill') {
    return { width: 470, height: 110 };
  }
  if (state.settings.cardStyle === 'intro') {
    return { width: 226, height: 312 };
  }
  return { width: 300, height: 102 };
}

function getBodyMetrics() {
  const cardSize = currentCardSize();
  const bodyWidth = dom.cardLayer.clientWidth || 1280;
  const bodyHeight = dom.cardLayer.clientHeight || 560;
  const halfWidth = cardSize.width / 2;
  const halfHeight = cardSize.height / 2;
  const sidePadding = state.settings.cardStyle === 'pill' ? 34 : 24;
  const topPadding = state.settings.cardStyle === 'intro' ? 24 : 16;
  const bottomPadding = state.settings.cardStyle === 'intro' ? 30 : 18;
  const left = halfWidth + sidePadding;
  const right = bodyWidth - halfWidth - sidePadding;
  const top = halfHeight + topPadding;
  const bottom = bodyHeight - halfHeight - bottomPadding;

  return {
    top: Math.max(halfHeight + 8, top),
    bottom: Math.max(halfHeight + 8, bottom),
    left: Math.max(halfWidth + 8, left),
    right: Math.max(halfWidth + 8, right)
  };
}

function computeRowY(index, count) {
  const metrics = getBodyMetrics();
  if (metrics.bottom <= metrics.top) {
    return metrics.top;
  }
  if (count <= 1) {
    return (metrics.top + metrics.bottom) / 2;
  }
  const span = metrics.bottom - metrics.top;
  return metrics.top + (span / (count - 1)) * index;
}

function computeRowCenters(rowLength) {
  const metrics = getBodyMetrics();
  if (rowLength === 1) {
    return [(metrics.left + metrics.right) / 2];
  }
  const span = metrics.right - metrics.left;
  const step = span / Math.max(1, rowLength - 1);
  return Array.from({ length: rowLength }, (_, index) => metrics.left + index * step);
}

function findRowForY(y) {
  if (state.rows.length === 0) {
    return { index: 0, create: true };
  }
  const rowCenters = state.rows.map((_, rowIndex) => computeRowY(rowIndex, state.rows.length));
  let nearestIndex = 0;
  let nearestDistance = Number.POSITIVE_INFINITY;

  rowCenters.forEach((centerY, index) => {
    const distance = Math.abs(centerY - y);
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestIndex = index;
    }
  });

  if (nearestDistance < 64) {
    return { index: nearestIndex, create: false };
  }

  let insertIndex = state.rows.length;
  for (let i = 0; i < rowCenters.length; i += 1) {
    if (y < rowCenters[i]) {
      insertIndex = i;
      break;
    }
  }
  return { index: insertIndex, create: true };
}

function insertNodeIntoRow(row, nodeId, x) {
  if (row.length === 0) {
    row.push(nodeId);
    return;
  }

  const centers = computeRowCenters(row.length);
  const sortable = row
    .map((id, index) => ({ id, center: centers[index] }))
    .sort((a, b) => a.center - b.center);

  let insertPosition = sortable.length;
  for (let i = 0; i < sortable.length; i += 1) {
    if (x < sortable[i].center) {
      insertPosition = i;
      break;
    }
  }

  row.splice(insertPosition, 0, nodeId);
}

function placeNodeAtPoint(nodeId, x, y) {
  removeNodeFromRows(nodeId);

  const target = findRowForY(y);
  if (target.create) {
    state.rows.splice(target.index, 0, []);
  }

  insertNodeIntoRow(state.rows[target.index], nodeId, x);
  compactRows();
  render();
}

function removeNodeFromRows(nodeId) {
  state.rows.forEach((row) => {
    const index = row.indexOf(nodeId);
    if (index >= 0) {
      row.splice(index, 1);
    }
  });
  compactRows();
}

function compactRows() {
  state.rows = state.rows.filter((row) => row.length > 0);
}

function addNode(memberId, x, y) {
  const nodeId = `n${state.nodeSequence++}`;
  state.nodes[nodeId] = { id: nodeId, memberId };
  placeNodeAtPoint(nodeId, x, y);
}

function clearCanvas() {
  state.rows = [];
  state.nodes = {};
  state.manualLinks = [];
  state.selectedCardId = null;
}

function sortedDepartments() {
  const all = new Set(state.members.map((member) => member.department));
  return ['All Departments', ...Array.from(all).sort((a, b) => a.localeCompare(b))];
}

function fillDepartmentFilter() {
  const options = sortedDepartments();
  const previous = dom.memberDepartmentFilter.value;
  dom.memberDepartmentFilter.innerHTML = options
    .map((item) => `<option value="${item}">${item}</option>`)
    .join('');
  if (options.includes(previous)) {
    dom.memberDepartmentFilter.value = previous;
  }
}

function visibleMembers() {
  const searchValue = dom.memberSearch.value.trim().toLowerCase();
  const departmentValue = dom.memberDepartmentFilter.value;

  return state.members.filter((member) => {
    const matchesDepartment =
      departmentValue === 'All Departments' || departmentValue === '' || member.department === departmentValue;
    const haystack = `${member.name} ${member.title} ${member.department}`.toLowerCase();
    const matchesSearch = haystack.includes(searchValue);
    return matchesDepartment && matchesSearch;
  });
}

function renderLibrary() {
  fillDepartmentFilter();
  const members = visibleMembers();

  dom.libraryList.innerHTML = members
    .map(
      (member) => `
        <div class="member-chip" draggable="true" data-member-id="${member.id}">
          <img class="member-thumb" src="${member.photo}" alt="${escapeHtml(member.name)}" />
          <div class="member-meta">
            <div class="member-name">${escapeHtml(member.name)}</div>
            <div class="member-role">${escapeHtml(member.title)}</div>
            <div class="member-dept">${escapeHtml(member.department)}</div>
          </div>
        </div>
      `
    )
    .join('');

  dom.libraryList.querySelectorAll('.member-chip').forEach((chip) => {
    chip.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text/member-id', chip.dataset.memberId);
      event.dataTransfer.effectAllowed = 'copy';
    });
  });
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function cardTemplate(member, xCenter) {
  const isRight = xCenter > 640;
  if (state.settings.cardStyle === 'pill') {
    return `
      <div class="card-main" style="grid-template-columns:${isRight ? '1fr 88px' : '88px 1fr'};padding:${isRight ? '10px 12px 10px 14px' : '10px 14px 10px 12px'};">
        <img class="card-photo" src="${member.photo}" alt="${escapeHtml(member.name)}" style="width:86px;height:86px;border-radius:50%;order:${isRight ? '2' : '0'};border:3px solid #f2dce0;" />
        <div class="card-copy" style="text-align:${isRight ? 'right' : 'left'};order:${isRight ? '1' : '0'};">
          <div class="card-name">${escapeHtml(member.name)}</div>
          <div class="card-role">${escapeHtml(member.title)}</div>
        </div>
      </div>
    `;
  }

  if (state.settings.cardStyle === 'intro') {
    return `
      <div class="card-main" style="grid-template-columns:1fr;gap:8px;justify-items:center;padding:14px;align-content:start;">
        <div style="width:44px;height:5px;border-radius:99px;background:#ababab;"></div>
        <div style="position:relative;width:128px;height:128px;">
          <div style="position:absolute;inset:6px;transform:rotate(-11deg);border-radius:12px;background:${state.settings.accentColor};"></div>
          <img class="card-photo" src="${member.photo}" alt="${escapeHtml(member.name)}" style="position:absolute;inset:0;margin:auto;width:120px;height:120px;border-radius:16px;border:0;" />
        </div>
        <div class="card-copy" style="text-align:center;">
          <div class="card-name">${escapeHtml(member.name)}</div>
          <div class="card-role">${escapeHtml(member.title)}</div>
        </div>
      </div>
    `;
  }

  return `
    <div class="card-accent"></div>
    <div class="card-main">
      <img class="card-photo" src="${member.photo}" alt="${escapeHtml(member.name)}" />
      <div class="card-copy">
        <div class="card-name">${escapeHtml(member.name)}</div>
        <div class="card-role">${escapeHtml(member.title)}</div>
      </div>
    </div>
  `;
}

function rowLayouts() {
  const layouts = {};
  const cardSize = currentCardSize();

  state.rows.forEach((row, rowIndex) => {
    const yCenter = computeRowY(rowIndex, state.rows.length);
    const xCenters = computeRowCenters(row.length);
    row.forEach((nodeId, columnIndex) => {
      layouts[nodeId] = {
        xCenter: xCenters[columnIndex],
        yCenter,
        x: xCenters[columnIndex] - cardSize.width / 2,
        y: yCenter - cardSize.height / 2,
        width: cardSize.width,
        height: cardSize.height
      };
    });
  });

  return layouts;
}

function renderCards(layouts) {
  const cardBorder = state.settings.showOutline
    ? `${state.settings.outlineWidth}px solid ${state.settings.outlineColor}`
    : '0px solid transparent';
  const cardShadow = state.settings.showShadow ? 'var(--shadow-soft)' : 'none';

  dom.cardLayer.innerHTML = Object.entries(layouts)
    .map(([nodeId, layout]) => {
      const node = state.nodes[nodeId];
      const member = getMemberById(node.memberId);
      if (!member) {
        return '';
      }

      const selectedClass = state.selectedCardId === nodeId ? 'selected' : '';
      const style = [
        `left:${layout.x}px`,
        `top:${layout.y}px`,
        `width:${layout.width}px`,
        `height:${layout.height}px`,
        `border:${cardBorder}`,
        `box-shadow:${cardShadow}`,
        `border-radius:${state.settings.cardRadius}px`
      ].join(';');

      return `
        <article class="canvas-card ${selectedClass}" data-node-id="${nodeId}" style="${style}">
          ${cardTemplate(member, layout.xCenter)}
        </article>
      `;
    })
    .join('');

  dom.cardLayer.querySelectorAll('.canvas-card').forEach((cardElement) => {
    const nodeId = cardElement.dataset.nodeId;

    cardElement.addEventListener('click', () => {
      onCardClick(nodeId);
    });

    cardElement.addEventListener('pointerdown', (event) => {
      startCardDrag(event, nodeId);
    });
  });

  dom.cardLayer.querySelectorAll('.card-name').forEach((element) => {
    element.style.fontSize = `${state.settings.nameSize}px`;
    element.style.fontWeight = state.settings.nameBold ? '800' : '600';
    element.style.color = state.settings.cardTextColor;
  });

  dom.cardLayer.querySelectorAll('.card-role').forEach((element) => {
    element.style.fontSize = `${state.settings.roleSize}px`;
    element.style.color = state.settings.cardSubColor;
  });

  dom.cardLayer.querySelectorAll('.card-accent').forEach((element) => {
    element.style.background = state.settings.accentColor;
  });
}

function toggleManualLink(fromNodeId, toNodeId) {
  const foundIndex = state.manualLinks.findIndex(
    (link) =>
      (link.from === fromNodeId && link.to === toNodeId) ||
      (link.from === toNodeId && link.to === fromNodeId)
  );

  if (foundIndex >= 0) {
    state.manualLinks.splice(foundIndex, 1);
    notify('Manual connector removed.');
  } else {
    state.manualLinks.push({ from: fromNodeId, to: toNodeId });
    notify('Manual connector added.');
  }
}

function onCardClick(nodeId) {
  if (state.selectedCardId === null) {
    state.selectedCardId = nodeId;
    notify('Select another card to connect, or click this card again to cancel.');
    render();
    return;
  }

  if (state.selectedCardId === nodeId) {
    state.selectedCardId = null;
    notify('Card selection canceled.');
    render();
    return;
  }

  toggleManualLink(state.selectedCardId, nodeId);
  state.selectedCardId = null;
  render();
}

function pathBetweenCards(fromLayout, toLayout) {
  const fromX = fromLayout.xCenter;
  const fromY = fromLayout.y + fromLayout.height;
  const toX = toLayout.xCenter;
  const toY = toLayout.y;
  const midY = fromY + (toY - fromY) / 2;
  return `M ${fromX} ${fromY} L ${fromX} ${midY} L ${toX} ${midY} L ${toX} ${toY}`;
}

function autoLinkPairs(layouts) {
  const links = [];
  for (let rowIndex = 1; rowIndex < state.rows.length; rowIndex += 1) {
    const currentRow = state.rows[rowIndex];
    const parentRow = state.rows[rowIndex - 1];
    currentRow.forEach((childNodeId) => {
      const childLayout = layouts[childNodeId];
      let nearestParent = parentRow[0];
      let nearestDistance = Number.POSITIVE_INFINITY;

      parentRow.forEach((parentNodeId) => {
        const parentLayout = layouts[parentNodeId];
        const distance = Math.abs(parentLayout.xCenter - childLayout.xCenter);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestParent = parentNodeId;
        }
      });

      links.push({ from: nearestParent, to: childNodeId });
    });
  }
  return links;
}

function renderConnectors(layouts) {
  const paths = [];

  if (state.autoConnect) {
    autoLinkPairs(layouts).forEach((link) => {
      const fromLayout = layouts[link.from];
      const toLayout = layouts[link.to];
      if (fromLayout && toLayout) {
        paths.push(`<path d="${pathBetweenCards(fromLayout, toLayout)}" class="connector-line" opacity="0.8"></path>`);
      }
    });
  }

  state.manualLinks.forEach((link) => {
    const fromLayout = layouts[link.from];
    const toLayout = layouts[link.to];
    if (!fromLayout || !toLayout) {
      return;
    }
    paths.push(`<path d="${pathBetweenCards(fromLayout, toLayout)}" class="connector-line" stroke="${state.settings.accentColor}" stroke-width="5"></path>`);
  });

  dom.connectorLayer.innerHTML = paths.join('');
}

function updateHeaderHeight() {
  const measured = dom.slideHeader?.offsetHeight || 112;
  const headerHeight = Math.max(112, measured + 4);
  dom.slide.style.setProperty('--header-height', `${headerHeight}px`);
}

function applyStyleToSlide() {
  dom.slide.style.setProperty('--slide-bg', state.settings.bgColor);
  dom.slide.style.setProperty('--slide-accent', state.settings.accentColor);
  dom.slide.style.setProperty('--slide-title', state.settings.headingColor);
  dom.slide.style.setProperty('--card-bg', state.settings.cardBg);
  dom.slide.style.setProperty('--card-title', state.settings.cardTextColor);
  dom.slide.style.setProperty('--card-subtitle', state.settings.cardSubColor);
  dom.slide.style.setProperty('--card-outline', state.settings.outlineColor);

  dom.slide.style.background = state.settings.bgImage
    ? `linear-gradient(rgba(255,255,255,0.18), rgba(255,255,255,0.18)), url(${state.settings.bgImage}) center/cover no-repeat`
    : state.settings.bgColor;

  dom.slideTitle.textContent = state.settings.title;
  dom.slideTitle.style.color = state.settings.headingColor;
  dom.slideTitle.style.fontSize = `${state.settings.headingSize}px`;
  dom.slideTitle.style.fontFamily = `${state.settings.headingFont}, sans-serif`;
  dom.slideTitle.style.fontWeight = state.settings.headingBold ? '800' : '600';
  updateHeaderHeight();

  if (state.settings.type === 'introduction') {
    dom.slide.style.backgroundImage = `${state.settings.bgImage ? `url(${state.settings.bgImage}),` : ''}radial-gradient(circle at 50% -20%, rgba(255,255,255,0.48), rgba(255,255,255,0))`;
    dom.slide.style.backgroundBlendMode = 'normal';
  }
}

function render() {
  applyStyleToSlide();
  const layouts = rowLayouts();
  renderCards(layouts);
  renderConnectors(layouts);
  persistState();
}

function addMemberFromForm() {
  const name = dom.newMemberName.value.trim();
  const title = dom.newMemberTitle.value.trim();
  const department = dom.newMemberDepartment.value.trim();
  if (!name || !title || !department) {
    notify('Add member needs name, position, and department.');
    return;
  }

  const nextId = `m${state.members.length + 1}`;
  const file = dom.newMemberPhoto.files[0];

  const finish = (photo) => {
    state.members.push({ id: nextId, name, title, department, photo });
    dom.newMemberName.value = '';
    dom.newMemberTitle.value = '';
    dom.newMemberDepartment.value = '';
    dom.newMemberPhoto.value = '';
    renderLibrary();
    notify(`Added ${name} to library.`);
  };

  if (file) {
    fileToDataUrl(file).then(finish);
  } else {
    finish(createAvatar(name, state.members.length + 1));
  }
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function syncControls() {
  dom.slideType.value = state.settings.type;
  dom.titleInput.value = state.settings.title;
  dom.bgColorInput.value = state.settings.bgColor;
  dom.accentColorInput.value = state.settings.accentColor;
  dom.headingColorInput.value = state.settings.headingColor;
  dom.headingSizeInput.value = String(state.settings.headingSize);
  dom.headingFontInput.value = state.settings.headingFont;
  dom.headingBoldInput.checked = state.settings.headingBold;
  dom.cardBgInput.value = state.settings.cardBg;
  dom.nameSizeInput.value = String(state.settings.nameSize);
  dom.titleSizeInput.value = String(state.settings.roleSize);
  dom.nameBoldInput.checked = state.settings.nameBold;
  dom.cardShadowInput.checked = state.settings.showShadow;
  dom.cardOutlineInput.checked = state.settings.showOutline;
  dom.cardRadiusInput.value = String(state.settings.cardRadius);
  dom.autoConnectToggle.checked = state.autoConnect;
}

function applyPreset(type, keepCurrentTitle = false) {
  const preset = PRESETS[type];
  if (!preset) {
    return;
  }

  const rememberedTitle = state.settings.title;
  state.settings = structuredClone(preset);
  if (keepCurrentTitle) {
    state.settings.title = rememberedTitle;
  }
  syncControls();
  render();
}

function bindControlEvents() {
  dom.memberSearch.addEventListener('input', renderLibrary);
  dom.memberDepartmentFilter.addEventListener('change', renderLibrary);
  dom.addMemberBtn.addEventListener('click', addMemberFromForm);

  dom.slideType.addEventListener('change', () => {
    applyPreset(dom.slideType.value);
    notify(`Preset changed to ${dom.slideType.selectedOptions[0].text}.`);
  });

  dom.titleInput.addEventListener('input', () => {
    state.settings.title = dom.titleInput.value;
    render();
  });

  dom.bgColorInput.addEventListener('input', () => {
    state.settings.bgColor = dom.bgColorInput.value;
    render();
  });

  dom.accentColorInput.addEventListener('input', () => {
    state.settings.accentColor = dom.accentColorInput.value;
    render();
  });

  dom.headingColorInput.addEventListener('input', () => {
    state.settings.headingColor = dom.headingColorInput.value;
    render();
  });

  dom.headingSizeInput.addEventListener('input', () => {
    state.settings.headingSize = Number(dom.headingSizeInput.value);
    render();
  });

  dom.headingFontInput.addEventListener('change', () => {
    state.settings.headingFont = dom.headingFontInput.value;
    render();
  });

  dom.headingBoldInput.addEventListener('change', () => {
    state.settings.headingBold = dom.headingBoldInput.checked;
    render();
  });

  dom.cardBgInput.addEventListener('input', () => {
    state.settings.cardBg = dom.cardBgInput.value;
    render();
  });

  dom.nameSizeInput.addEventListener('input', () => {
    state.settings.nameSize = Number(dom.nameSizeInput.value);
    render();
  });

  dom.titleSizeInput.addEventListener('input', () => {
    state.settings.roleSize = Number(dom.titleSizeInput.value);
    render();
  });

  dom.nameBoldInput.addEventListener('change', () => {
    state.settings.nameBold = dom.nameBoldInput.checked;
    render();
  });

  dom.cardShadowInput.addEventListener('change', () => {
    state.settings.showShadow = dom.cardShadowInput.checked;
    render();
  });

  dom.cardOutlineInput.addEventListener('change', () => {
    state.settings.showOutline = dom.cardOutlineInput.checked;
    render();
  });

  dom.cardRadiusInput.addEventListener('input', () => {
    state.settings.cardRadius = Number(dom.cardRadiusInput.value);
    render();
  });

  dom.autoConnectToggle.addEventListener('change', () => {
    state.autoConnect = dom.autoConnectToggle.checked;
    render();
  });

  dom.clearCanvasBtn.addEventListener('click', () => {
    clearCanvas();
    render();
    notify('Canvas cleared.');
  });

  dom.autoSortBtn.addEventListener('click', () => {
    compactRows();
    render();
    notify('Rows reflowed with equal spacing.');
  });

  dom.backgroundImageInput.addEventListener('change', async () => {
    const file = dom.backgroundImageInput.files[0];
    if (!file) {
      return;
    }
    state.settings.bgImage = await fileToDataUrl(file);
    render();
    notify('Background image applied.');
  });

  dom.exportPngBtn.addEventListener('click', exportPng);
  dom.exportPdfBtn.addEventListener('click', exportPdf);
  dom.exportPptxBtn.addEventListener('click', exportPptx);
  dom.exportHtmlBtn.addEventListener('click', exportHtml);
  dom.cardLayer.addEventListener('dragover', (event) => {
    event.preventDefault();
    dom.cardLayer.classList.add('drop-active');
  });

  dom.cardLayer.addEventListener('dragleave', () => {
    dom.cardLayer.classList.remove('drop-active');
  });

  dom.cardLayer.addEventListener('drop', (event) => {
    event.preventDefault();
    dom.cardLayer.classList.remove('drop-active');
    const memberId = event.dataTransfer.getData('text/member-id');
    if (!memberId) {
      return;
    }

    const layerRect = dom.cardLayer.getBoundingClientRect();
    const x = ((event.clientX - layerRect.left) / layerRect.width) * (dom.cardLayer.clientWidth || 1280);
    const y = ((event.clientY - layerRect.top) / layerRect.height) * (dom.cardLayer.clientHeight || 560);
    addNode(memberId, x, y);
    notify('Card added to canvas.');
  });

  window.addEventListener('resize', scalePreview);
}

function startCardDrag(event, nodeId) {
  if (event.button !== 0) {
    return;
  }
  event.preventDefault();

  const startClientX = event.clientX;
  const startClientY = event.clientY;
  let moved = false;

  const move = (moveEvent) => {
    const dx = moveEvent.clientX - startClientX;
    const dy = moveEvent.clientY - startClientY;
    if (!moved && Math.hypot(dx, dy) > 8) {
      moved = true;
      state.draggingNodeId = nodeId;
      const card = dom.cardLayer.querySelector(`[data-node-id="${nodeId}"]`);
      if (card) {
        card.classList.add('dragging');
      }
    }
  };

  const up = (upEvent) => {
    window.removeEventListener('pointermove', move);
    window.removeEventListener('pointerup', up);

    const card = dom.cardLayer.querySelector(`[data-node-id="${nodeId}"]`);
    if (card) {
      card.classList.remove('dragging');
    }

    if (!moved) {
      return;
    }

    const layerRect = dom.cardLayer.getBoundingClientRect();
    const x = ((upEvent.clientX - layerRect.left) / layerRect.width) * (dom.cardLayer.clientWidth || 1280);
    const y = ((upEvent.clientY - layerRect.top) / layerRect.height) * (dom.cardLayer.clientHeight || 560);
    placeNodeAtPoint(nodeId, x, y);
    state.draggingNodeId = null;
    notify('Card moved.');
  };

  window.addEventListener('pointermove', move);
  window.addEventListener('pointerup', up);
}

function toFileName(base, extension) {
  const core = slug(state.settings.title || base || 'team-slide');
  return `${core}.${extension}`;
}

async function capturePngDataUrl() {
  return window.htmlToImage.toPng(dom.slide, {
    cacheBust: true,
    pixelRatio: 2
  });
}

function downloadDataUrl(dataUrl, fileName) {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = fileName;
  link.click();
}

async function exportPng() {
  try {
    notify('Rendering PNG...');
    const dataUrl = await capturePngDataUrl();
    downloadDataUrl(dataUrl, toFileName('team-slide', 'png'));
    notify('PNG exported.');
  } catch (error) {
    console.error(error);
    notify('PNG export failed.');
  }
}

async function exportPdf() {
  try {
    notify('Rendering PDF...');
    const dataUrl = await capturePngDataUrl();
    const pdf = new window.jspdf.jsPDF({
      orientation: 'landscape',
      unit: 'pt',
      format: [1280, 720]
    });
    pdf.addImage(dataUrl, 'PNG', 0, 0, 1280, 720);
    pdf.save(toFileName('team-slide', 'pdf'));
    notify('PDF exported.');
  } catch (error) {
    console.error(error);
    notify('PDF export failed.');
  }
}

async function exportPptx() {
  try {
    if (!window.PptxGenJS) {
      notify('PPTX library is not available.');
      return;
    }
    notify('Rendering PPTX...');
    const dataUrl = await capturePngDataUrl();
    const pptx = new window.PptxGenJS();
    pptx.layout = 'LAYOUT_WIDE';
    const slide = pptx.addSlide();
    slide.addImage({ data: dataUrl, x: 0, y: 0, w: 13.333, h: 7.5 });
    await pptx.writeFile({ fileName: toFileName('team-slide', 'pptx') });
    notify('PPTX exported.');
  } catch (error) {
    console.error(error);
    notify('PPTX export failed.');
  }
}

function inlineStyles(sourceNode, targetNode) {
  const computed = getComputedStyle(sourceNode);
  const styleText = Array.from(computed)
    .map((property) => `${property}:${computed.getPropertyValue(property)};`)
    .join('');
  targetNode.setAttribute('style', styleText);

  const sourceChildren = sourceNode.children;
  const targetChildren = targetNode.children;
  for (let i = 0; i < sourceChildren.length; i += 1) {
    inlineStyles(sourceChildren[i], targetChildren[i]);
  }
}

function exportHtml() {
  try {
    const clone = dom.slide.cloneNode(true);
    inlineStyles(dom.slide, clone);

    const html = `<!doctype html>
<html>
<head>
<meta charset="UTF-8" />
<title>${escapeHtml(state.settings.title)}</title>
</head>
<body style="margin:0;background:#121821;display:grid;place-items:center;height:100vh;">
${clone.outerHTML}
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = toFileName('team-slide', 'html');
    link.click();
    URL.revokeObjectURL(url);
    notify('HTML exported.');
  } catch (error) {
    console.error(error);
    notify('HTML export failed.');
  }
}

function parsePromptColors(promptText) {
  const text = promptText.toLowerCase();
  if (text.includes('blue')) {
    state.settings.accentColor = '#2f66c7';
  }
  if (text.includes('red')) {
    state.settings.accentColor = '#be1e2d';
  }
  if (text.includes('gray') || text.includes('grey')) {
    state.settings.bgColor = '#e4e4e4';
  }
  if (text.includes('white background')) {
    state.settings.bgColor = '#ffffff';
  }
}

function membersByPrompt(promptText) {
  const text = promptText.toLowerCase();
  if (text.includes('corporate')) {
    return state.members.filter((member) => member.department === 'Corporate Services');
  }
  if (text.includes('construction') && !text.includes('pre construction')) {
    return state.members.filter((member) => member.department === 'Construction');
  }
  if (text.includes('introduction')) {
    return state.members.filter((member) => member.department === 'Introduction');
  }
  if (text.includes('pre construction') || text.includes('estimating')) {
    return state.members.filter((member) => member.department === 'Pre Construction' || member.department === 'Construction');
  }
  return state.members.slice(0, 12);
}

function choosePresetFromPrompt(promptText) {
  const text = promptText.toLowerCase();
  if (text.includes('corporate')) {
    return 'corporate';
  }
  if (text.includes('introduction')) {
    return 'introduction';
  }
  if (text.includes('construction') && !text.includes('pre construction')) {
    return 'construction';
  }
  if (text.includes('pre construction') || text.includes('estimating')) {
    return 'preconstruction';
  }
  return state.settings.type;
}

function patternFromPrompt(promptText, count, targetPreset) {
  const text = promptText.toLowerCase();
  if (text.includes('single row')) {
    return [count];
  }
  if (text.includes('two-column') || text.includes('two column')) {
    const pattern = [];
    let remaining = count;
    while (remaining > 0) {
      pattern.push(Math.min(2, remaining));
      remaining -= 2;
    }
    return pattern;
  }
  if (text.includes('top-down') || text.includes('hierarchy')) {
    const pattern = [1];
    let remaining = count - 1;
    while (remaining > 0) {
      const take = Math.min(3, remaining);
      pattern.push(take);
      remaining -= take;
    }
    return pattern;
  }
  if (targetPreset === 'introduction') {
    if (count <= 3) {
      return [count];
    }
    return [Math.min(3, count), Math.max(0, Math.min(4, count - 3)), Math.max(0, count - 7)].filter((value) => value > 0);
  }

  const pattern = [];
  let remaining = count;
  while (remaining > 0) {
    const take = Math.min(3, remaining);
    pattern.push(take);
    remaining -= take;
  }
  return pattern;
}

function layoutMembers(memberIds, pattern) {
  clearCanvas();
  let cursor = 0;
  pattern.forEach((rowSize) => {
    const row = [];
    for (let i = 0; i < rowSize; i += 1) {
      const memberId = memberIds[cursor];
      cursor += 1;
      if (!memberId) {
        continue;
      }
      const nodeId = `n${state.nodeSequence++}`;
      state.nodes[nodeId] = { id: nodeId, memberId };
      row.push(nodeId);
    }
    if (row.length > 0) {
      state.rows.push(row);
    }
  });
  compactRows();
}

function generateFromPrompt() {
  const promptText = dom.aiPrompt.value.trim();
  if (!promptText) {
    notify('Write a prompt first for AI generation.');
    return;
  }

  const targetPreset = choosePresetFromPrompt(promptText);
  applyPreset(targetPreset);
  parsePromptColors(promptText);

  const memberPool = membersByPrompt(promptText);
  const maxCount = Math.min(memberPool.length, targetPreset === 'corporate' ? 8 : targetPreset === 'introduction' ? 10 : 12);
  const selectedMembers = memberPool.slice(0, maxCount).map((member) => member.id);

  const pattern = patternFromPrompt(promptText, selectedMembers.length, targetPreset);
  layoutMembers(selectedMembers, pattern);
  render();

  notify('AI layout generated. You can still drag cards to fine-tune rows.');
}

function scalePreview() {
  const containerWidth = dom.previewHost.clientWidth - 34;
  const scale = Math.max(0.42, Math.min(1, containerWidth / 1280));
  dom.slide.style.transform = `scale(${scale})`;
  dom.slide.style.marginBottom = `${(1 - scale) * 720}px`;
}

function persistState() {
  const payload = {
    members: state.members,
    rows: state.rows,
    nodes: state.nodes,
    manualLinks: state.manualLinks,
    nodeSequence: state.nodeSequence,
    settings: state.settings,
    autoConnect: state.autoConnect
  };
  localStorage.setItem('teamgen-state-v1', JSON.stringify(payload));
}

function restoreState() {
  const stored = localStorage.getItem('teamgen-state-v1');
  if (!stored) {
    seedInitialLayout();
    return;
  }

  try {
    const parsed = JSON.parse(stored);
    if (!parsed || !parsed.settings || !parsed.members) {
      seedInitialLayout();
      return;
    }

    state.members = parsed.members;
    state.rows = parsed.rows || [];
    state.nodes = parsed.nodes || {};
    state.manualLinks = parsed.manualLinks || [];
    state.selectedCardId = null;
    state.nodeSequence = parsed.nodeSequence || 1;
    state.settings = normalizeSettings(parsed.settings);
    state.autoConnect = parsed.autoConnect !== false;
  } catch (error) {
    console.error(error);
    seedInitialLayout();
  }
}

function seedInitialLayout() {
  state.settings = structuredClone(PRESETS.preconstruction);
  state.rows = [];
  state.nodes = {};
  state.manualLinks = [];
  state.nodeSequence = 1;

  layoutMembers(
    ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7'],
    [2, 3, 2]
  );
}

function boot() {
  restoreState();
  bindControlEvents();
  renderLibrary();
  syncControls();
  render();
  scalePreview();
  notify('Ready. Drag members to build your org chart slide.');
}

boot();
