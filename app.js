const DEFAULT_MEMBERS = [];

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
    bgImage: '',
    themePreset: 'corporate',
    hierarchyDirection: 'top-down',
    nodeSpacing: 'balanced',
    connectorStyle: 'orthogonal',
    connectorType: 'solid',
    connectorWeight: 'medium',
    cardShape: 'rounded',
    cardLayout: 'avatar-left',
    avatarStyle: 'rounded',
    cardElevation: 'soft',
    infoVisibility: 'name-role',
    backgroundStyle: 'plain',
    cardEntranceAnimation: 'cascade',
    connectorAnimation: 'draw',
    animationSpeed: 'normal',
    layoutMode: 'strict',
    formalOrganic: 20,
    symmetryDynamic: 18,
    structureFreeform: 14,
    shadowIntensity: 100,
    blurStrength: 10,
    backgroundDepth: 24,
    floatingCards: true,
    parallaxEnabled: false,
    parallaxAmount: 8,
    ambientGlow: false,
    connectorVisualStyle: 'default',
    connectorDecoration: 'none',
    cardVisualType: 'standard',
    avatarTreatment: 'default'
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
    bgImage: '',
    themePreset: 'corporate',
    hierarchyDirection: 'top-down',
    nodeSpacing: 'balanced',
    connectorStyle: 'orthogonal',
    connectorType: 'solid',
    connectorWeight: 'medium',
    cardShape: 'rounded',
    cardLayout: 'avatar-left',
    avatarStyle: 'rounded',
    cardElevation: 'soft',
    infoVisibility: 'name-role',
    backgroundStyle: 'plain',
    cardEntranceAnimation: 'cascade',
    connectorAnimation: 'draw',
    animationSpeed: 'normal',
    layoutMode: 'strict',
    formalOrganic: 20,
    symmetryDynamic: 18,
    structureFreeform: 14,
    shadowIntensity: 100,
    blurStrength: 10,
    backgroundDepth: 24,
    floatingCards: true,
    parallaxEnabled: false,
    parallaxAmount: 8,
    ambientGlow: false,
    connectorVisualStyle: 'default',
    connectorDecoration: 'none',
    cardVisualType: 'standard',
    avatarTreatment: 'default'
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
    bgImage: '',
    themePreset: 'corporate',
    hierarchyDirection: 'top-down',
    nodeSpacing: 'balanced',
    connectorStyle: 'orthogonal',
    connectorType: 'solid',
    connectorWeight: 'medium',
    cardShape: 'pill',
    cardLayout: 'avatar-left',
    avatarStyle: 'circle',
    cardElevation: 'soft',
    infoVisibility: 'name-role',
    backgroundStyle: 'plain',
    cardEntranceAnimation: 'cascade',
    connectorAnimation: 'draw',
    animationSpeed: 'normal',
    layoutMode: 'symmetrical',
    formalOrganic: 24,
    symmetryDynamic: 22,
    structureFreeform: 18,
    shadowIntensity: 112,
    blurStrength: 10,
    backgroundDepth: 28,
    floatingCards: true,
    parallaxEnabled: false,
    parallaxAmount: 8,
    ambientGlow: false,
    connectorVisualStyle: 'rounded',
    connectorDecoration: 'none',
    cardVisualType: 'standard',
    avatarTreatment: 'default'
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
    bgImage: '',
    themePreset: 'minimal',
    hierarchyDirection: 'top-down',
    nodeSpacing: 'balanced',
    connectorStyle: 'orthogonal',
    connectorType: 'solid',
    connectorWeight: 'medium',
    cardShape: 'soft',
    cardLayout: 'avatar-top',
    avatarStyle: 'rounded',
    cardElevation: 'flat',
    infoVisibility: 'name-role',
    backgroundStyle: 'plain',
    cardEntranceAnimation: 'tree-grow',
    connectorAnimation: 'draw',
    animationSpeed: 'normal',
    layoutMode: 'editorial',
    formalOrganic: 28,
    symmetryDynamic: 32,
    structureFreeform: 30,
    shadowIntensity: 78,
    blurStrength: 6,
    backgroundDepth: 30,
    floatingCards: true,
    parallaxEnabled: false,
    parallaxAmount: 8,
    ambientGlow: false,
    connectorVisualStyle: 'technical',
    connectorDecoration: 'none',
    cardVisualType: 'editorial',
    avatarTreatment: 'default'
  }
};

const STORAGE_KEY = 'teamgen-state-v2';

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
  removeDepartmentInput: document.getElementById('removeDepartmentInput'),
  removeDepartmentBtn: document.getElementById('removeDepartmentBtn'),
  clearLibraryBtn: document.getElementById('clearLibraryBtn'),
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
  hierarchyDirectionInput: document.getElementById('hierarchyDirectionInput'),
  nodeSpacingInput: document.getElementById('nodeSpacingInput'),
  connectorStyleInput: document.getElementById('connectorStyleInput'),
  connectorTypeInput: document.getElementById('connectorTypeInput'),
  connectorWeightInput: document.getElementById('connectorWeightInput'),
  cardEntranceAnimationInput: document.getElementById('cardEntranceAnimationInput'),
  connectorAnimationInput: document.getElementById('connectorAnimationInput'),
  animationSpeedInput: document.getElementById('animationSpeedInput'),
  layoutModeInput: document.getElementById('layoutModeInput'),
  formalOrganicInput: document.getElementById('formalOrganicInput'),
  symmetryDynamicInput: document.getElementById('symmetryDynamicInput'),
  structureFreeformInput: document.getElementById('structureFreeformInput'),
  shadowIntensityInput: document.getElementById('shadowIntensityInput'),
  blurStrengthInput: document.getElementById('blurStrengthInput'),
  backgroundDepthInput: document.getElementById('backgroundDepthInput'),
  floatingCardsInput: document.getElementById('floatingCardsInput'),
  parallaxEnabledInput: document.getElementById('parallaxEnabledInput'),
  parallaxAmountInput: document.getElementById('parallaxAmountInput'),
  ambientGlowInput: document.getElementById('ambientGlowInput'),
  connectorVisualStyleInput: document.getElementById('connectorVisualStyleInput'),
  connectorDecorationInput: document.getElementById('connectorDecorationInput'),
  cardVisualTypeInput: document.getElementById('cardVisualTypeInput'),
  avatarTreatmentInput: document.getElementById('avatarTreatmentInput'),
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
  cardShapeInput: document.getElementById('cardShapeInput'),
  cardLayoutInput: document.getElementById('cardLayoutInput'),
  avatarStyleInput: document.getElementById('avatarStyleInput'),
  cardElevationInput: document.getElementById('cardElevationInput'),
  infoVisibilityInput: document.getElementById('infoVisibilityInput'),
  backgroundStyleInput: document.getElementById('backgroundStyleInput'),
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

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function hashToUnit(value) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return ((hash >>> 0) % 1000) / 1000;
}

function getMemberById(memberId) {
  return state.members.find((member) => member.id === memberId);
}

function currentCardSize() {
  let width = 300;
  let height = 102;

  if (state.settings.cardStyle === 'pill') {
    width = 470;
    height = 110;
  } else if (state.settings.cardStyle === 'intro') {
    width = 226;
    height = 312;
  }

  if (state.settings.cardLayout === 'avatar-top') {
    width = Math.max(width, 260);
    height = Math.max(height, 180);
  } else if (state.settings.cardLayout === 'compact') {
    width = Math.max(220, Math.floor(width * 0.88));
    height = Math.max(82, Math.floor(height * 0.84));
  }

  return { width, height };
}

function getSpacingScale() {
  if (state.settings.nodeSpacing === 'compact') {
    return 0.72;
  }
  if (state.settings.nodeSpacing === 'spacious') {
    return 1.28;
  }
  return 1;
}

function getBodyMetrics() {
  const cardSize = currentCardSize();
  const bodyWidth = dom.cardLayer.clientWidth || 1280;
  const bodyHeight = dom.cardLayer.clientHeight || 560;
  const halfWidth = cardSize.width / 2;
  const halfHeight = cardSize.height / 2;
  const spacing = getSpacingScale();
  const sidePadding = (state.settings.cardStyle === 'pill' ? 34 : 24) * spacing;
  const topPadding = (state.settings.cardStyle === 'intro' ? 24 : 16) * spacing;
  const bottomPadding = (state.settings.cardStyle === 'intro' ? 30 : 18) * spacing;
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

function computeRowYFromDirection(index, count) {
  const y = computeRowY(index, count);
  if (state.settings.hierarchyDirection === 'bottom-up') {
    const metrics = getBodyMetrics();
    return metrics.top + metrics.bottom - y;
  }
  return y;
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

function findRowForPrimaryAxis(primaryPoint) {
  if (state.rows.length === 0) {
    return { index: 0, create: true };
  }
  const rowCenters = state.rows.map((_, rowIndex) => {
    if (state.settings.hierarchyDirection === 'left-right') {
      const metrics = getBodyMetrics();
      if (state.rows.length <= 1) {
        return (metrics.left + metrics.right) / 2;
      }
      const span = metrics.right - metrics.left;
      return metrics.left + (span / (state.rows.length - 1)) * rowIndex;
    }
    return computeRowYFromDirection(rowIndex, state.rows.length);
  });
  let nearestIndex = 0;
  let nearestDistance = Number.POSITIVE_INFINITY;

  rowCenters.forEach((centerValue, index) => {
    const distance = Math.abs(centerValue - primaryPoint);
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
    if (primaryPoint < rowCenters[i]) {
      insertIndex = i;
      break;
    }
  }
  return { index: insertIndex, create: true };
}

function insertNodeIntoRow(row, nodeId, secondaryPoint) {
  if (row.length === 0) {
    row.push(nodeId);
    return;
  }

  const centers =
    state.settings.hierarchyDirection === 'left-right'
      ? (() => {
          const metrics = getBodyMetrics();
          if (row.length === 1) {
            return [(metrics.top + metrics.bottom) / 2];
          }
          const span = metrics.bottom - metrics.top;
          const step = span / Math.max(1, row.length - 1);
          return Array.from({ length: row.length }, (_, index) => metrics.top + index * step);
        })()
      : computeRowCenters(row.length);
  const sortable = row
    .map((id, index) => ({ id, center: centers[index] }))
    .sort((a, b) => a.center - b.center);

  let insertPosition = sortable.length;
  for (let i = 0; i < sortable.length; i += 1) {
    if (secondaryPoint < sortable[i].center) {
      insertPosition = i;
      break;
    }
  }

  row.splice(insertPosition, 0, nodeId);
}

function placeNodeAtPoint(nodeId, x, y) {
  removeNodeFromRows(nodeId);
  const primary = state.settings.hierarchyDirection === 'left-right' ? x : y;
  const secondary = state.settings.hierarchyDirection === 'left-right' ? y : x;
  const target = findRowForPrimaryAxis(primary);
  if (target.create) {
    state.rows.splice(target.index, 0, []);
  }

  insertNodeIntoRow(state.rows[target.index], nodeId, secondary);
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
  const all = new Set(state.members.map((member) => member.department).filter(Boolean));
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

function fillDepartmentRemovalOptions() {
  const departments = sortedDepartments().filter((name) => name !== 'All Departments');
  const previous = dom.removeDepartmentInput.value;
  dom.removeDepartmentInput.innerHTML = departments.length
    ? departments.map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join('')
    : '<option value="">No departments</option>';
  if (departments.includes(previous)) {
    dom.removeDepartmentInput.value = previous;
  }
}

function removeNodesForMemberIds(memberIds) {
  const memberSet = new Set(memberIds);
  const nodeIdsToRemove = Object.values(state.nodes)
    .filter((node) => memberSet.has(node.memberId))
    .map((node) => node.id);
  if (nodeIdsToRemove.length === 0) {
    return;
  }

  const nodeSet = new Set(nodeIdsToRemove);
  nodeIdsToRemove.forEach((nodeId) => {
    removeNodeFromRows(nodeId);
    delete state.nodes[nodeId];
  });
  state.manualLinks = state.manualLinks.filter((link) => !nodeSet.has(link.from) && !nodeSet.has(link.to));
  if (state.selectedCardId && nodeSet.has(state.selectedCardId)) {
    state.selectedCardId = null;
  }
}

function removeMember(memberId) {
  const member = getMemberById(memberId);
  if (!member) {
    return;
  }
  state.members = state.members.filter((item) => item.id !== memberId);
  removeNodesForMemberIds([memberId]);
  renderLibrary();
  render();
  notify(`Removed ${member.name} from team library.`);
}

function removeDepartment() {
  const department = dom.removeDepartmentInput.value;
  if (!department) {
    notify('No department selected.');
    return;
  }
  const membersInDepartment = state.members.filter((member) => member.department === department);
  if (membersInDepartment.length === 0) {
    notify(`No members found in ${department}.`);
    return;
  }

  const memberIds = membersInDepartment.map((member) => member.id);
  state.members = state.members.filter((member) => member.department !== department);
  removeNodesForMemberIds(memberIds);
  if (dom.memberDepartmentFilter.value === department) {
    dom.memberDepartmentFilter.value = 'All Departments';
  }
  renderLibrary();
  render();
  notify(`Removed department ${department} (${memberIds.length} members).`);
}

function clearLibraryMembers() {
  state.members = [];
  clearCanvas();
  renderLibrary();
  render();
  notify('Team library cleared.');
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
  fillDepartmentRemovalOptions();
  const members = visibleMembers();

  dom.libraryList.innerHTML = members.length
    ? members
    .map(
      (member) => `
        <div class="member-chip" draggable="true" data-member-id="${member.id}">
          <img class="member-thumb" src="${member.photo}" alt="${escapeHtml(member.name)}" />
          <div class="member-meta">
            <div class="member-name">${escapeHtml(member.name)}</div>
            <div class="member-role">${escapeHtml(member.title)}</div>
            <div class="member-dept">${escapeHtml(member.department)}</div>
          </div>
          <button class="member-remove-btn" type="button" data-remove-member-id="${member.id}" aria-label="Remove ${escapeHtml(member.name)}">Remove</button>
        </div>
      `
    )
    .join('')
    : '<div class="library-empty">No team members yet. Add your first member above.</div>';

  dom.libraryList.querySelectorAll('.member-chip').forEach((chip) => {
    chip.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text/member-id', chip.dataset.memberId);
      event.dataTransfer.effectAllowed = 'copy';
    });
  });

  dom.libraryList.querySelectorAll('.member-remove-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const memberId = button.dataset.removeMemberId;
      if (memberId) {
        removeMember(memberId);
      }
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
  const avatarTreatment = state.settings.avatarTreatment || 'default';
  const showAvatar = state.settings.avatarStyle !== 'hidden' && avatarTreatment !== 'hidden';
  const layout = state.settings.cardLayout;
  const compact = layout === 'compact';

  const avatarRadiusMap = {
    circle: '50%',
    square: '4px',
    rounded: '12px',
    hidden: '0'
  };
  let avatarRadius = avatarRadiusMap[state.settings.avatarStyle] || '12px';
  if (avatarTreatment === 'circle') {
    avatarRadius = '50%';
  } else if (avatarTreatment === 'square') {
    avatarRadius = '3px';
  } else if (avatarTreatment === 'rounded') {
    avatarRadius = '12px';
  }
  const avatarSize = compact ? 56 : 78;
  const avatarFilter =
    avatarTreatment === 'monochrome'
      ? 'grayscale(1) contrast(1.05)'
      : avatarTreatment === 'duotone'
        ? 'grayscale(1) sepia(0.75) hue-rotate(185deg) saturate(1.55)'
        : 'none';
  const avatarExtraStyle = [
    `border-radius:${avatarRadius}`,
    avatarFilter !== 'none' ? `filter:${avatarFilter}` : '',
    avatarTreatment === 'cutout' ? 'mix-blend-mode:multiply' : '',
    avatarTreatment === 'floating' ? 'box-shadow:0 10px 22px rgba(12,22,34,0.3);transform:translateY(-3px)' : ''
  ]
    .filter(Boolean)
    .join(';');

  const showRole = state.settings.infoVisibility !== 'name-only';
  const showDept = state.settings.infoVisibility === 'name-role-dept';

  const copyBlock = `
    <div class="card-copy" style="text-align:${layout === 'avatar-top' ? 'center' : isRight && state.settings.cardStyle === 'pill' ? 'right' : 'left'};">
      <div class="card-name">${escapeHtml(member.name)}</div>
      ${showRole ? `<div class="card-role">${escapeHtml(member.title)}</div>` : ''}
      ${showDept ? `<div class="card-role" style="font-size:0.86em;opacity:0.78;">${escapeHtml(member.department || '')}</div>` : ''}
    </div>
  `;

  if (avatarTreatment === 'full-bleed' && showAvatar) {
    return `
      <div class="card-main full-bleed" style="position:relative;display:block;">
        <img class="card-photo" src="${member.photo}" alt="${escapeHtml(member.name)}" style="${avatarExtraStyle}" />
        ${copyBlock}
      </div>
    `;
  }

  if (layout === 'avatar-top') {
    return `
      <div class="card-accent"></div>
      <div class="card-main" style="grid-template-columns:1fr;justify-items:center;gap:${compact ? '6px' : '10px'};padding:${compact ? '10px' : '12px'};">
        ${showAvatar ? `<img class="card-photo" src="${member.photo}" alt="${escapeHtml(member.name)}" style="width:${avatarSize}px;height:${avatarSize}px;${avatarExtraStyle};" />` : ''}
        ${copyBlock}
      </div>
    `;
  }

  if (state.settings.cardStyle === 'pill') {
    return `
      <div class="card-main" style="grid-template-columns:${showAvatar ? (isRight ? `${compact ? '1fr 64px' : '1fr 88px'}` : `${compact ? '64px 1fr' : '88px 1fr'}`) : '1fr'};padding:${isRight ? '10px 12px 10px 14px' : '10px 14px 10px 12px'};gap:${compact ? '10px' : '14px'};">
        ${showAvatar ? `<img class="card-photo" src="${member.photo}" alt="${escapeHtml(member.name)}" style="width:${compact ? 64 : 86}px;height:${compact ? 64 : 86}px;${avatarExtraStyle};order:${isRight ? '2' : '0'};border:3px solid #f2dce0;" />` : ''}
        ${copyBlock}
      </div>
    `;
  }

  return `
    <div class="card-accent"></div>
    <div class="card-main" style="grid-template-columns:${showAvatar ? `${compact ? 58 : 78}px 1fr` : '1fr'};gap:${compact ? '10px' : '14px'};padding:${compact ? '10px' : '12px'};">
      ${showAvatar ? `<img class="card-photo" src="${member.photo}" alt="${escapeHtml(member.name)}" style="width:${compact ? 58 : 78}px;height:${compact ? 58 : 64}px;${avatarExtraStyle};" />` : ''}
      ${copyBlock}
    </div>
  `;
}

function rowLayouts() {
  const layouts = {};
  const cardSize = currentCardSize();
  const metrics = getBodyMetrics();

  state.rows.forEach((row, rowIndex) => {
    if (state.settings.hierarchyDirection === 'left-right') {
      const xCenter =
        state.rows.length <= 1
          ? (metrics.left + metrics.right) / 2
          : metrics.left + ((metrics.right - metrics.left) / (state.rows.length - 1)) * rowIndex;
      const yCenters =
        row.length <= 1
          ? [(metrics.top + metrics.bottom) / 2]
          : Array.from({ length: row.length }, (_, index) => metrics.top + ((metrics.bottom - metrics.top) / (row.length - 1)) * index);
      row.forEach((nodeId, columnIndex) => {
        layouts[nodeId] = {
          xCenter,
          yCenter: yCenters[columnIndex],
          x: xCenter - cardSize.width / 2,
          y: yCenters[columnIndex] - cardSize.height / 2,
          width: cardSize.width,
          height: cardSize.height,
          rowIndex,
          columnIndex
        };
      });
      return;
    }

    const yCenter = computeRowYFromDirection(rowIndex, state.rows.length);
    const xCenters = computeRowCenters(row.length);
    row.forEach((nodeId, columnIndex) => {
      layouts[nodeId] = {
        xCenter: xCenters[columnIndex],
        yCenter,
        x: xCenters[columnIndex] - cardSize.width / 2,
        y: yCenter - cardSize.height / 2,
        width: cardSize.width,
        height: cardSize.height,
        rowIndex,
        columnIndex
      };
    });
  });

  const mode = state.settings.layoutMode || 'strict';
  const organicAmount = clamp(Number(state.settings.formalOrganic || 0) / 100, 0, 1);
  const dynamicAmount = clamp(Number(state.settings.symmetryDynamic || 0) / 100, 0, 1);
  const freeformAmount = clamp(Number(state.settings.structureFreeform || 0) / 100, 0, 1);
  const centerX = (metrics.left + metrics.right) / 2;
  const centerY = (metrics.top + metrics.bottom) / 2;
  const rowCount = Math.max(1, state.rows.length);

  Object.entries(layouts).forEach(([nodeId, layout]) => {
    const rowProgress = rowCount <= 1 ? 0 : layout.rowIndex / (rowCount - 1);
    if (mode === 'editorial') {
      const stagger = layout.rowIndex % 2 === 0 ? -70 : 70;
      layout.x += stagger * dynamicAmount * 0.9;
      layout.xCenter += stagger * dynamicAmount * 0.9;
    } else if (mode === 'clustered') {
      const clusterSlots = [0.2, 0.5, 0.8];
      const slot = clusterSlots[(layout.columnIndex || 0) % clusterSlots.length];
      const targetX = lerp(metrics.left, metrics.right, slot);
      layout.xCenter = lerp(layout.xCenter, targetX, 0.48);
      layout.x = layout.xCenter - layout.width / 2;
    } else if (mode === 'masonry') {
      const lift = (layout.columnIndex % 2 === 0 ? -1 : 1) * (10 + dynamicAmount * 18);
      layout.y += lift;
      layout.yCenter += lift;
    } else if (mode === 'organic' || mode === 'physics') {
      const jitterX = (hashToUnit(`${nodeId}-x`) - 0.5) * 90 * organicAmount;
      const jitterY = (hashToUnit(`${nodeId}-y`) - 0.5) * 70 * (organicAmount * 0.85 + freeformAmount * 0.2);
      layout.x += jitterX;
      layout.y += jitterY;
      layout.xCenter += jitterX;
      layout.yCenter += jitterY;
    } else if (mode === 'radial') {
      const row = layout.rowIndex;
      const rowSize = Math.max(1, state.rows[row]?.length || 1);
      const start = -Math.PI / 2;
      const sweep = Math.PI * 1.7;
      const angle = rowSize <= 1 ? start : start + (sweep * layout.columnIndex) / Math.max(1, rowSize - 1);
      const ringRadius = 90 + row * 118;
      layout.xCenter = centerX + Math.cos(angle) * ringRadius;
      layout.yCenter = centerY + Math.sin(angle) * (ringRadius * 0.66);
      layout.x = layout.xCenter - layout.width / 2;
      layout.y = layout.yCenter - layout.height / 2;
    } else if (mode === 'hexagonal') {
      const row = layout.rowIndex;
      const offset = row % 2 === 0 ? -44 : 44;
      layout.x += offset;
      layout.xCenter += offset;
      layout.y += (layout.columnIndex % 2 === 0 ? -10 : 10) * (0.35 + dynamicAmount * 0.65);
      layout.yCenter = layout.y + layout.height / 2;
    } else if (mode === 'swimlane') {
      const laneCount = Math.max(1, state.rows.length);
      const laneHeight = (metrics.bottom - metrics.top) / laneCount;
      const laneY = metrics.top + laneHeight * layout.rowIndex + laneHeight / 2;
      layout.yCenter = laneY;
      layout.y = laneY - layout.height / 2;
      const margin = 80 + dynamicAmount * 40;
      if ((layout.columnIndex || 0) === 0) {
        layout.xCenter = metrics.left + margin;
      } else if ((state.rows[layout.rowIndex]?.length || 1) - 1 === layout.columnIndex) {
        layout.xCenter = metrics.right - margin;
      }
      layout.x = layout.xCenter - layout.width / 2;
    }

    if (mode === 'symmetrical') {
      const distFromCenter = layout.xCenter - centerX;
      layout.xCenter = centerX + distFromCenter * (1 - dynamicAmount * 0.22);
      layout.x = layout.xCenter - layout.width / 2;
    }

    const freeShift = (hashToUnit(`${nodeId}-free`) - 0.5) * 34 * freeformAmount * 0.6;
    if (mode !== 'strict' && mode !== 'symmetrical') {
      layout.x += freeShift;
      layout.xCenter += freeShift;
    }

    layout.x = clamp(layout.x, 8, (dom.cardLayer.clientWidth || 1280) - layout.width - 8);
    layout.y = clamp(layout.y, 8, (dom.cardLayer.clientHeight || 560) - layout.height - 8);
    layout.xCenter = layout.x + layout.width / 2;
    layout.yCenter = layout.y + layout.height / 2;
  });

  return layouts;
}

function getCardRadiusFromShape() {
  if (state.settings.cardShape === 'square') {
    return 4;
  }
  if (state.settings.cardShape === 'pill') {
    return 999;
  }
  if (state.settings.cardShape === 'soft') {
    return 18;
  }
  return state.settings.cardRadius;
}

function getCardShadowFromElevation() {
  const intensity = clamp((Number(state.settings.shadowIntensity) || 100) / 100, 0, 2.2);
  const scale = (value) => Math.round(value * intensity);

  if (state.settings.cardElevation === 'flat') {
    return 'none';
  }
  if (state.settings.cardElevation === 'floating') {
    return `0 ${scale(18)}px ${scale(34)}px rgba(18, 32, 50, ${0.24 * Math.max(0.3, intensity)})`;
  }
  if (state.settings.cardElevation === 'glass') {
    return `0 ${scale(12)}px ${scale(24)}px rgba(18, 32, 50, ${0.2 * Math.max(0.3, intensity)}), inset 0 1px 0 rgba(255,255,255,0.72)`;
  }
  return state.settings.showShadow
    ? `0 ${scale(9)}px ${scale(20)}px rgba(23, 36, 53, ${0.09 * Math.max(0.3, intensity)})`
    : 'none';
}

function cardVisualStyles() {
  const type = state.settings.cardVisualType || 'standard';
  const accent = state.settings.accentColor;
  const baseBg = state.settings.cardBg;
  const blur = clamp(Number(state.settings.blurStrength || 10), 0, 24);

  if (type === 'glass') {
    return { background: 'rgba(255,255,255,0.55)', backdrop: `blur(${blur}px) saturate(132%)`, border: `1px solid rgba(255,255,255,0.7)` };
  }
  if (type === 'elevated') {
    return { background: baseBg, extraClass: 'card-visual-elevated' };
  }
  if (type === 'minimal') {
    return { background: 'rgba(255,255,255,0.95)', border: '1px solid rgba(209,220,232,0.6)', accentHeight: 3 };
  }
  if (type === 'outline') {
    return { background: 'rgba(255,255,255,0.08)', border: `2px solid ${accent}` };
  }
  if (type === 'filled') {
    return { background: accent, text: '#ffffff', subText: 'rgba(255,255,255,0.9)', accentHeight: 0 };
  }
  if (type === 'split') {
    return { background: `linear-gradient(90deg, ${accent} 0%, ${accent} 32%, ${baseBg} 32%, ${baseBg} 100%)` };
  }
  if (type === 'stack') {
    return { background: baseBg, extraClass: 'card-visual-stack' };
  }
  if (type === 'frosted') {
    return { background: 'rgba(248, 252, 255, 0.46)', backdrop: `blur(${Math.max(8, blur)}px) saturate(160%)`, border: '1px solid rgba(255,255,255,0.8)' };
  }
  if (type === 'gradient') {
    return { background: `linear-gradient(130deg, ${accent}18, ${baseBg} 38%, ${accent}2E)` };
  }
  if (type === 'blueprint') {
    return { background: 'linear-gradient(#e2efff,#e2efff), repeating-linear-gradient(0deg, rgba(30,92,167,0.12), rgba(30,92,167,0.12) 1px, transparent 1px, transparent 12px)', border: '1px solid rgba(50,102,164,0.34)' };
  }
  if (type === 'editorial') {
    return { background: baseBg, border: '2px solid #202937', accentHeight: 2 };
  }
  return { background: baseBg };
}

function animationTimings() {
  const speed = state.settings.animationSpeed;
  if (speed === 'fast') {
    return { cardDuration: 320, connectorDuration: 520, stepDelay: 40 };
  }
  if (speed === 'slow') {
    return { cardDuration: 860, connectorDuration: 1350, stepDelay: 130 };
  }
  return { cardDuration: 560, connectorDuration: 900, stepDelay: 80 };
}

function cardAnimationClass() {
  const style = state.settings.cardEntranceAnimation;
  if (style === 'cascade') {
    return 'anim-card-cascade';
  }
  if (style === 'tree-grow') {
    return 'anim-card-tree';
  }
  if (style === 'fade') {
    return 'anim-card-fade';
  }
  if (style === 'slide') {
    return 'anim-card-slide';
  }
  if (style === 'pop') {
    return 'anim-card-pop';
  }
  return '';
}

function connectorAnimationClass() {
  const style = state.settings.connectorAnimation;
  if (style === 'draw') {
    return 'anim-connector-draw';
  }
  if (style === 'fade') {
    return 'anim-connector-fade';
  }
  if (style === 'flow') {
    return 'anim-connector-flow';
  }
  return '';
}

function cardAnimationDelay(layout, timings) {
  const rowIndex = layout.rowIndex || 0;
  const columnIndex = layout.columnIndex || 0;
  if (state.settings.cardEntranceAnimation === 'cascade') {
    return (rowIndex * 3 + columnIndex) * timings.stepDelay;
  }
  if (state.settings.cardEntranceAnimation === 'tree-grow') {
    return rowIndex * Math.round(timings.stepDelay * 1.35);
  }
  if (state.settings.cardEntranceAnimation === 'slide') {
    return (rowIndex + columnIndex) * Math.round(timings.stepDelay * 0.72);
  }
  if (state.settings.cardEntranceAnimation === 'fade') {
    return (rowIndex + columnIndex) * Math.round(timings.stepDelay * 0.45);
  }
  return 0;
}

function renderCards(layouts) {
  const cardBorder = state.settings.showOutline
    ? `${state.settings.outlineWidth}px solid ${state.settings.outlineColor}`
    : '0px solid transparent';
  const cardShadow = getCardShadowFromElevation();
  const cardRadius = getCardRadiusFromShape();
  const blurStrength = clamp(Number(state.settings.blurStrength || 10), 0, 24);
  const timings = animationTimings();
  const entranceClass = cardAnimationClass();
  const floatingClass = state.settings.floatingCards ? ' float-on-hover' : '';

  dom.cardLayer.innerHTML = Object.entries(layouts)
    .map(([nodeId, layout]) => {
      const node = state.nodes[nodeId];
      const member = getMemberById(node.memberId);
      if (!member) {
        return '';
      }

      const selectedClass = state.selectedCardId === nodeId ? 'selected' : '';
      const visual = cardVisualStyles();
      const animationClass = entranceClass ? ` ${entranceClass}` : '';
      const animationDelay = cardAnimationDelay(layout, timings);
      const style = [
        `left:${layout.x}px`,
        `top:${layout.y}px`,
        `width:${layout.width}px`,
        `height:${layout.height}px`,
        `border:${visual.border || cardBorder}`,
        `box-shadow:${cardShadow}`,
        `border-radius:${cardRadius}px`,
        `--enter-duration:${timings.cardDuration}ms`,
        `--enter-delay:${animationDelay}ms`,
        `background:${visual.background || state.settings.cardBg}`,
        visual.backdrop ? `backdrop-filter:${visual.backdrop}` : '',
        state.settings.cardElevation === 'glass' && !visual.backdrop ? `backdrop-filter: blur(${blurStrength}px) saturate(125%)` : '',
        state.settings.cardElevation === 'glass' && !visual.background ? 'background: rgba(255,255,255,0.58)' : '',
        visual.accentHeight !== undefined ? `--card-accent-h:${visual.accentHeight}px` : '',
        `--card-name-color:${visual.text || state.settings.cardTextColor}`,
        `--card-role-color:${visual.subText || state.settings.cardSubColor}`
      ].join(';');

      return `
        <article class="canvas-card ${selectedClass}${animationClass}${floatingClass}${visual.extraClass ? ` ${visual.extraClass}` : ''}" data-node-id="${nodeId}" data-card-visual="${state.settings.cardVisualType || 'standard'}" style="${style}">
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
    const visual = element.closest('.canvas-card')?.dataset.cardVisual;
    const color = visual === 'filled' ? '#ffffff' : state.settings.cardTextColor;
    element.style.fontSize = `${state.settings.nameSize}px`;
    element.style.fontWeight = state.settings.nameBold ? '800' : '600';
    element.style.color = color;
  });

  dom.cardLayer.querySelectorAll('.card-role').forEach((element) => {
    const visual = element.closest('.canvas-card')?.dataset.cardVisual;
    const color = visual === 'filled' ? 'rgba(255,255,255,0.9)' : state.settings.cardSubColor;
    element.style.fontSize = `${state.settings.roleSize}px`;
    element.style.color = color;
  });

  dom.cardLayer.querySelectorAll('.card-accent').forEach((element) => {
    const visual = element.closest('.canvas-card')?.dataset.cardVisual;
    if (visual === 'filled' || visual === 'full-bleed') {
      element.style.display = 'none';
      return;
    }
    element.style.display = 'block';
    element.style.background = state.settings.accentColor;
    element.style.height = `var(--card-accent-h, 6px)`;
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

function getConnectorAnchors(fromLayout, toLayout) {
  if (state.settings.hierarchyDirection === 'left-right') {
    const fromIsLeft = fromLayout.xCenter <= toLayout.xCenter;
    return {
      fromX: fromIsLeft ? fromLayout.x + fromLayout.width : fromLayout.x,
      fromY: fromLayout.yCenter,
      toX: fromIsLeft ? toLayout.x : toLayout.x + toLayout.width,
      toY: toLayout.yCenter
    };
  }

  if (state.settings.hierarchyDirection === 'bottom-up') {
    return {
      fromX: fromLayout.xCenter,
      fromY: fromLayout.y,
      toX: toLayout.xCenter,
      toY: toLayout.y + toLayout.height
    };
  }

  return {
    fromX: fromLayout.xCenter,
    fromY: fromLayout.y + fromLayout.height,
    toX: toLayout.xCenter,
    toY: toLayout.y
  };
}

function pathBetweenCards(fromLayout, toLayout) {
  const { fromX, fromY, toX, toY } = getConnectorAnchors(fromLayout, toLayout);
  const profile = connectorVisualProfile();
  const style = profile.routeHint || state.settings.connectorStyle;

  if (style === 'straight') {
    return `M ${fromX} ${fromY} L ${toX} ${toY}`;
  }

  if (style === 'curved') {
    if (state.settings.hierarchyDirection === 'left-right') {
      const midX = fromX + (toX - fromX) * 0.5;
      if ((state.settings.connectorVisualStyle || '') === 'hand-drawn') {
        const bend = (hashToUnit(`${fromX}-${toX}-${fromY}`) - 0.5) * 40;
        return `M ${fromX} ${fromY} C ${midX + bend} ${fromY + bend}, ${midX - bend} ${toY - bend}, ${toX} ${toY}`;
      }
      return `M ${fromX} ${fromY} C ${midX} ${fromY}, ${midX} ${toY}, ${toX} ${toY}`;
    }
    const midY = fromY + (toY - fromY) * 0.5;
    if ((state.settings.connectorVisualStyle || '') === 'hand-drawn') {
      const bend = (hashToUnit(`${fromY}-${toY}-${toX}`) - 0.5) * 40;
      return `M ${fromX} ${fromY} C ${fromX + bend} ${midY - bend}, ${toX - bend} ${midY + bend}, ${toX} ${toY}`;
    }
    return `M ${fromX} ${fromY} C ${fromX} ${midY}, ${toX} ${midY}, ${toX} ${toY}`;
  }

  if (style === 'stepped') {
    if (state.settings.hierarchyDirection === 'left-right') {
      const stepX = fromX + (toX - fromX) * 0.35;
      return `M ${fromX} ${fromY} L ${stepX} ${fromY} L ${stepX} ${toY} L ${toX} ${toY}`;
    }
    const stepY = fromY + (toY - fromY) * 0.35;
    return `M ${fromX} ${fromY} L ${fromX} ${stepY} L ${toX} ${stepY} L ${toX} ${toY}`;
  }

  if (state.settings.hierarchyDirection === 'left-right') {
    const midX = fromX + (toX - fromX) / 2;
    return `M ${fromX} ${fromY} L ${midX} ${fromY} L ${midX} ${toY} L ${toX} ${toY}`;
  }
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

function connectorVisualProfile() {
  const visual = state.settings.connectorVisualStyle || 'default';
  if (visual === 'sharp') {
    return { linecap: 'square', linejoin: 'miter' };
  }
  if (visual === 'rounded') {
    return { linecap: 'round', linejoin: 'round' };
  }
  if (visual === 'organic') {
    return { linecap: 'round', linejoin: 'round', routeHint: 'curved' };
  }
  if (visual === 'technical') {
    return { linecap: 'butt', linejoin: 'miter', dash: '6 4' };
  }
  if (visual === 'hand-drawn') {
    return { linecap: 'round', linejoin: 'round', dash: '3 2' };
  }
  if (visual === 'double') {
    return { linecap: 'round', linejoin: 'round', double: true };
  }
  if (visual === 'dotted') {
    return { linecap: 'round', linejoin: 'round', dash: '1 10' };
  }
  if (visual === 'segmented') {
    return { linecap: 'round', linejoin: 'round', dash: '15 8' };
  }
  if (visual === 'tapered') {
    return { linecap: 'round', linejoin: 'round', tapered: true };
  }
  return { linecap: 'round', linejoin: 'round' };
}

function renderConnectors(layouts) {
  const paths = [];
  const decorations = [];
  const weightMap = { thin: 2, medium: 4, bold: 7 };
  const strokeWidth = weightMap[state.settings.connectorWeight] || 4;
  const timings = animationTimings();
  const connectorClass = connectorAnimationClass();
  const visual = connectorVisualProfile();
  const decoration = state.settings.connectorDecoration || 'none';
  const baseDash =
    state.settings.connectorType === 'dashed'
      ? '9 7'
      : visual.dash || '';
  let pathIndex = 0;

  function pushPath(fromLayout, toLayout, stroke, width, opacity = 0.8) {
    const d = pathBetweenCards(fromLayout, toLayout);
    const anchors = getConnectorAnchors(fromLayout, toLayout);
    const midX = (anchors.fromX + anchors.toX) / 2;
    const midY = (anchors.fromY + anchors.toY) / 2;
    const delay = pathIndex * Math.round(timings.stepDelay * 0.75);
    pathIndex += 1;
    const dashValue = connectorClass === 'anim-connector-draw' ? '' : connectorClass === 'anim-connector-flow' ? '14 10' : baseDash;
    const markerEnd = decoration === 'arrowheads' || visual.tapered ? 'url(#connector-arrow)' : '';
    const linecap = visual.linecap || 'round';
    const linejoin = visual.linejoin || 'round';

    if (visual.double) {
      paths.push(
        `<path d="${d}" class="connector-line ${connectorClass}" fill="none" stroke="${stroke}" stroke-width="${width + 3}" opacity="${opacity * 0.25}" ${dashValue ? `stroke-dasharray="${dashValue}"` : ''} stroke-linecap="${linecap}" stroke-linejoin="${linejoin}" style="--connector-duration:${timings.connectorDuration}ms;--connector-delay:${delay}ms;"></path>`
      );
    }

    paths.push(
      `<path d="${d}" class="connector-line ${connectorClass}" fill="none" stroke="${stroke}" stroke-width="${width}" opacity="${opacity}" ${dashValue ? `stroke-dasharray="${dashValue}"` : ''} ${markerEnd ? `marker-end="${markerEnd}"` : ''} stroke-linecap="${linecap}" stroke-linejoin="${linejoin}" style="--connector-duration:${timings.connectorDuration}ms;--connector-delay:${delay}ms;"></path>`
    );

    if (decoration === 'dots') {
      decorations.push(`<circle cx="${anchors.toX}" cy="${anchors.toY}" r="${Math.max(2, width - 0.5)}" fill="${stroke}" opacity="0.95"></circle>`);
    }
    if (decoration === 'junctions') {
      decorations.push(`<circle cx="${midX}" cy="${midY}" r="${Math.max(3, width)}" fill="${stroke}" opacity="0.88"></circle>`);
    }
    if (decoration === 'labels') {
      decorations.push(`<text x="${midX + 6}" y="${midY - 6}" class="connector-label">Link</text>`);
    }
    if (decoration === 'status') {
      const palette = ['#26b36a', '#d39c2f', '#dc4d4d'];
      const color = palette[Math.floor(hashToUnit(`${midX}-${midY}`) * palette.length) % palette.length];
      decorations.push(`<circle cx="${midX}" cy="${midY}" r="${Math.max(3, width)}" fill="${color}" stroke="#ffffff" stroke-width="1"></circle>`);
    }
  }

  if (state.autoConnect) {
    autoLinkPairs(layouts).forEach((link) => {
      const fromLayout = layouts[link.from];
      const toLayout = layouts[link.to];
      if (fromLayout && toLayout) {
        pushPath(fromLayout, toLayout, '#8d949f', strokeWidth, 0.8);
      }
    });
  }

  state.manualLinks.forEach((link) => {
    const fromLayout = layouts[link.from];
    const toLayout = layouts[link.to];
    if (!fromLayout || !toLayout) {
      return;
    }
    pushPath(fromLayout, toLayout, state.settings.accentColor, Math.max(strokeWidth + 1, 4), 1);
  });

  const defs = `<defs><marker id="connector-arrow" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L10,4 L0,8 z" fill="${state.settings.accentColor}"></path></marker></defs>`;
  dom.connectorLayer.innerHTML = `${defs}${paths.join('')}${decorations.join('')}`;

  if (connectorClass === 'anim-connector-draw') {
    dom.connectorLayer.querySelectorAll('.connector-line').forEach((path) => {
      try {
        const length = path.getTotalLength();
        path.style.setProperty('--dash-start', `${length}`);
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
      } catch (error) {
        // getTotalLength can fail on disconnected SVG nodes; safe to ignore.
      }
    });
  }
}

function updateHeaderHeight() {
  const measured = dom.slideHeader?.offsetHeight || 0;
  const headerHeight = Math.max(8, measured + 2);
  dom.slide.style.setProperty('--header-height', `${headerHeight}px`);
}

function slideBackgroundFromStyle() {
  const bg = state.settings.bgColor;
  const depth = clamp(Number(state.settings.backgroundDepth || 0) / 100, 0, 1);
  const depthOverlay = `radial-gradient(1000px 480px at 50% -20%, rgba(255,255,255,${0.28 + depth * 0.24}), rgba(255,255,255,0))`;
  if (state.settings.backgroundStyle === 'gradient') {
    return `${depthOverlay}, linear-gradient(155deg, ${bg} 0%, #dfe8f3 100%)`;
  }
  if (state.settings.backgroundStyle === 'grid') {
    return `${depthOverlay}, linear-gradient(${bg}, ${bg}), linear-gradient(rgba(65,87,115,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(65,87,115,0.14) 1px, transparent 1px)`;
  }
  if (state.settings.backgroundStyle === 'blueprint') {
    return `${depthOverlay}, linear-gradient(#d7e6f8, #d7e6f8), linear-gradient(rgba(34,78,122,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(34,78,122,0.18) 1px, transparent 1px)`;
  }
  if (state.settings.backgroundStyle === 'dots') {
    return `${depthOverlay}, radial-gradient(circle at 1px 1px, rgba(68,90,120,0.3) 1px, transparent 0), linear-gradient(${bg}, ${bg})`;
  }
  return `${depthOverlay}, linear-gradient(${bg}, ${bg})`;
}

function backgroundSizingFromStyle() {
  if (state.settings.backgroundStyle === 'plain') {
    return 'auto, cover';
  }
  if (state.settings.backgroundStyle === 'grid' || state.settings.backgroundStyle === 'blueprint') {
    return 'auto, auto, 34px 34px, 34px 34px';
  }
  if (state.settings.backgroundStyle === 'dots') {
    return 'auto, 16px 16px, auto';
  }
  return 'auto, cover';
}

function applyStyleToSlide() {
  dom.slide.style.setProperty('--slide-bg', state.settings.bgColor);
  dom.slide.style.setProperty('--slide-accent', state.settings.accentColor);
  dom.slide.style.setProperty('--slide-title', state.settings.headingColor);
  dom.slide.style.setProperty('--card-bg', state.settings.cardBg);
  dom.slide.style.setProperty('--card-title', state.settings.cardTextColor);
  dom.slide.style.setProperty('--card-subtitle', state.settings.cardSubColor);
  dom.slide.style.setProperty('--card-outline', state.settings.outlineColor);
  const blurStrength = clamp(Number(state.settings.blurStrength || 10), 0, 24);
  const shadowIntensity = clamp((Number(state.settings.shadowIntensity) || 100) / 100, 0, 2.2);
  const glow = state.settings.ambientGlow ? `0 0 ${Math.round(28 + shadowIntensity * 30)}px ${state.settings.accentColor}30` : '';
  dom.slide.style.boxShadow = `0 ${Math.round(18 * shadowIntensity)}px ${Math.round(34 * shadowIntensity)}px rgba(23, 33, 45, ${0.22 * Math.max(0.4, shadowIntensity)})${glow ? `, ${glow}` : ''}`;
  dom.slide.style.backdropFilter = `blur(${Math.round(blurStrength * 0.12)}px)`;

  if (state.settings.bgImage) {
    dom.slide.style.background = `linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)), url(${state.settings.bgImage}) center/cover no-repeat`;
    dom.slide.style.backgroundSize = 'cover';
  } else {
    dom.slide.style.background = slideBackgroundFromStyle();
    dom.slide.style.backgroundSize = backgroundSizingFromStyle();
  }

  if (dom.slideTitle) {
    dom.slideTitle.textContent = state.settings.title;
    dom.slideTitle.style.color = state.settings.headingColor;
    dom.slideTitle.style.fontSize = `${state.settings.headingSize}px`;
    dom.slideTitle.style.fontFamily = `${state.settings.headingFont}, sans-serif`;
    dom.slideTitle.style.fontWeight = state.settings.headingBold ? '800' : '600';
  }
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

  const nextId = `m${state.members.reduce((max, member) => {
    const value = Number(String(member.id || '').replace(/^m/, ''));
    return Number.isFinite(value) ? Math.max(max, value) : max;
  }, 0) + 1}`;
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
  dom.hierarchyDirectionInput.value = state.settings.hierarchyDirection;
  dom.nodeSpacingInput.value = state.settings.nodeSpacing;
  dom.connectorStyleInput.value = state.settings.connectorStyle;
  dom.connectorTypeInput.value = state.settings.connectorType;
  dom.connectorWeightInput.value = state.settings.connectorWeight;
  dom.cardEntranceAnimationInput.value = state.settings.cardEntranceAnimation || 'none';
  dom.connectorAnimationInput.value = state.settings.connectorAnimation || 'none';
  dom.animationSpeedInput.value = state.settings.animationSpeed || 'normal';
  dom.layoutModeInput.value = state.settings.layoutMode || 'strict';
  dom.formalOrganicInput.value = String(state.settings.formalOrganic ?? 20);
  dom.symmetryDynamicInput.value = String(state.settings.symmetryDynamic ?? 18);
  dom.structureFreeformInput.value = String(state.settings.structureFreeform ?? 14);
  dom.shadowIntensityInput.value = String(state.settings.shadowIntensity ?? 100);
  dom.blurStrengthInput.value = String(state.settings.blurStrength ?? 10);
  dom.backgroundDepthInput.value = String(state.settings.backgroundDepth ?? 24);
  dom.floatingCardsInput.checked = state.settings.floatingCards !== false;
  dom.parallaxEnabledInput.checked = state.settings.parallaxEnabled === true;
  dom.parallaxAmountInput.value = String(state.settings.parallaxAmount ?? 8);
  dom.ambientGlowInput.checked = state.settings.ambientGlow === true;
  dom.connectorVisualStyleInput.value = state.settings.connectorVisualStyle || 'default';
  dom.connectorDecorationInput.value = state.settings.connectorDecoration || 'none';
  dom.cardVisualTypeInput.value = state.settings.cardVisualType || 'standard';
  dom.avatarTreatmentInput.value = state.settings.avatarTreatment || 'default';
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
  dom.cardShapeInput.value = state.settings.cardShape;
  dom.cardLayoutInput.value = state.settings.cardLayout;
  dom.avatarStyleInput.value = state.settings.avatarStyle;
  dom.cardElevationInput.value = state.settings.cardElevation;
  dom.infoVisibilityInput.value = state.settings.infoVisibility;
  dom.backgroundStyleInput.value = state.settings.backgroundStyle;
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
  dom.removeDepartmentBtn.addEventListener('click', removeDepartment);
  dom.clearLibraryBtn.addEventListener('click', clearLibraryMembers);

  dom.hierarchyDirectionInput.addEventListener('change', () => {
    state.settings.hierarchyDirection = dom.hierarchyDirectionInput.value;
    render();
  });

  dom.nodeSpacingInput.addEventListener('change', () => {
    state.settings.nodeSpacing = dom.nodeSpacingInput.value;
    render();
  });

  dom.connectorStyleInput.addEventListener('change', () => {
    state.settings.connectorStyle = dom.connectorStyleInput.value;
    render();
  });

  dom.connectorTypeInput.addEventListener('change', () => {
    state.settings.connectorType = dom.connectorTypeInput.value;
    render();
  });

  dom.connectorWeightInput.addEventListener('change', () => {
    state.settings.connectorWeight = dom.connectorWeightInput.value;
    render();
  });

  dom.cardEntranceAnimationInput.addEventListener('change', () => {
    state.settings.cardEntranceAnimation = dom.cardEntranceAnimationInput.value;
    render();
  });

  dom.connectorAnimationInput.addEventListener('change', () => {
    state.settings.connectorAnimation = dom.connectorAnimationInput.value;
    render();
  });

  dom.animationSpeedInput.addEventListener('change', () => {
    state.settings.animationSpeed = dom.animationSpeedInput.value;
    render();
  });

  dom.layoutModeInput.addEventListener('change', () => {
    state.settings.layoutMode = dom.layoutModeInput.value;
    render();
  });

  dom.formalOrganicInput.addEventListener('input', () => {
    state.settings.formalOrganic = Number(dom.formalOrganicInput.value);
    render();
  });

  dom.symmetryDynamicInput.addEventListener('input', () => {
    state.settings.symmetryDynamic = Number(dom.symmetryDynamicInput.value);
    render();
  });

  dom.structureFreeformInput.addEventListener('input', () => {
    state.settings.structureFreeform = Number(dom.structureFreeformInput.value);
    render();
  });

  dom.shadowIntensityInput.addEventListener('input', () => {
    state.settings.shadowIntensity = Number(dom.shadowIntensityInput.value);
    render();
  });

  dom.blurStrengthInput.addEventListener('input', () => {
    state.settings.blurStrength = Number(dom.blurStrengthInput.value);
    render();
  });

  dom.backgroundDepthInput.addEventListener('input', () => {
    state.settings.backgroundDepth = Number(dom.backgroundDepthInput.value);
    render();
  });

  dom.floatingCardsInput.addEventListener('change', () => {
    state.settings.floatingCards = dom.floatingCardsInput.checked;
    render();
  });

  dom.parallaxEnabledInput.addEventListener('change', () => {
    state.settings.parallaxEnabled = dom.parallaxEnabledInput.checked;
    if (!state.settings.parallaxEnabled) {
      dom.cardLayer.style.transform = 'translate3d(0, 0, 0)';
      dom.connectorLayer.style.transform = 'translate3d(0, 0, 0)';
    }
    render();
  });

  dom.parallaxAmountInput.addEventListener('input', () => {
    state.settings.parallaxAmount = Number(dom.parallaxAmountInput.value);
    render();
  });

  dom.ambientGlowInput.addEventListener('change', () => {
    state.settings.ambientGlow = dom.ambientGlowInput.checked;
    render();
  });

  dom.connectorVisualStyleInput.addEventListener('change', () => {
    state.settings.connectorVisualStyle = dom.connectorVisualStyleInput.value;
    render();
  });

  dom.connectorDecorationInput.addEventListener('change', () => {
    state.settings.connectorDecoration = dom.connectorDecorationInput.value;
    render();
  });

  dom.cardVisualTypeInput.addEventListener('change', () => {
    state.settings.cardVisualType = dom.cardVisualTypeInput.value;
    render();
  });

  dom.avatarTreatmentInput.addEventListener('change', () => {
    state.settings.avatarTreatment = dom.avatarTreatmentInput.value;
    if (state.settings.avatarTreatment === 'hidden') {
      state.settings.avatarStyle = 'hidden';
    } else if (state.settings.avatarStyle === 'hidden') {
      state.settings.avatarStyle = 'rounded';
    }
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

  dom.cardShapeInput.addEventListener('change', () => {
    state.settings.cardShape = dom.cardShapeInput.value;
    render();
  });

  dom.cardLayoutInput.addEventListener('change', () => {
    state.settings.cardLayout = dom.cardLayoutInput.value;
    render();
  });

  dom.avatarStyleInput.addEventListener('change', () => {
    state.settings.avatarStyle = dom.avatarStyleInput.value;
    render();
  });

  dom.cardElevationInput.addEventListener('change', () => {
    state.settings.cardElevation = dom.cardElevationInput.value;
    render();
  });

  dom.infoVisibilityInput.addEventListener('change', () => {
    state.settings.infoVisibility = dom.infoVisibilityInput.value;
    render();
  });

  dom.backgroundStyleInput.addEventListener('change', () => {
    state.settings.backgroundStyle = dom.backgroundStyleInput.value;
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

  dom.slide.addEventListener('pointermove', applyParallaxFromPointer);
  dom.slide.addEventListener('pointerleave', () => {
    dom.cardLayer.style.transform = 'translate3d(0, 0, 0)';
    dom.connectorLayer.style.transform = 'translate3d(0, 0, 0)';
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

async function capturePngDataUrl(options = {}) {
  const transparent = options.transparent === true;
  const originalBackground = dom.slide.style.background;
  const originalBackgroundImage = dom.slide.style.backgroundImage;
  const originalBackgroundSize = dom.slide.style.backgroundSize;
  const originalBoxShadow = dom.slide.style.boxShadow;

  if (transparent) {
    dom.slide.style.background = 'transparent';
    dom.slide.style.backgroundImage = 'none';
    dom.slide.style.backgroundSize = 'auto';
    dom.slide.style.boxShadow = 'none';
  }

  try {
    return await window.htmlToImage.toPng(dom.slide, {
      cacheBust: true,
      pixelRatio: 2,
      backgroundColor: transparent ? 'transparent' : undefined
    });
  } finally {
    if (transparent) {
      dom.slide.style.background = originalBackground;
      dom.slide.style.backgroundImage = originalBackgroundImage;
      dom.slide.style.backgroundSize = originalBackgroundSize;
      dom.slide.style.boxShadow = originalBoxShadow;
    }
  }
}

function downloadDataUrl(dataUrl, fileName) {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = fileName;
  link.click();
}

async function exportPng() {
  try {
    notify('Rendering transparent PNG...');
    const dataUrl = await capturePngDataUrl({ transparent: true });
    downloadDataUrl(dataUrl, toFileName('team-slide', 'png'));
    notify('Transparent PNG exported.');
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

function applyParallaxFromPointer(event) {
  if (!state.settings.parallaxEnabled) {
    dom.cardLayer.style.transform = 'translate3d(0, 0, 0)';
    dom.connectorLayer.style.transform = 'translate3d(0, 0, 0)';
    return;
  }
  const rect = dom.slide.getBoundingClientRect();
  const px = clamp((event.clientX - rect.left) / rect.width, 0, 1) - 0.5;
  const py = clamp((event.clientY - rect.top) / rect.height, 0, 1) - 0.5;
  const amount = clamp(Number(state.settings.parallaxAmount || 8), 0, 24);
  const cardX = Math.round(px * amount * 2);
  const cardY = Math.round(py * amount * 2);
  const lineX = Math.round(px * amount * 1.2);
  const lineY = Math.round(py * amount * 1.2);
  dom.cardLayer.style.transform = `translate3d(${cardX}px, ${cardY}px, 0)`;
  dom.connectorLayer.style.transform = `translate3d(${lineX}px, ${lineY}px, 0)`;
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
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function restoreState() {
  const stored = localStorage.getItem(STORAGE_KEY);
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
  state.members = structuredClone(DEFAULT_MEMBERS);
  state.rows = [];
  state.nodes = {};
  state.manualLinks = [];
  state.nodeSequence = 1;
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
