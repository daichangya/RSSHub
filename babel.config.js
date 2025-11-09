export default class NotificationPlugin {
  constructor() {
    this.name = 'Notification Plugin';
    this.version = '1.0.0';
    this.description = '显示文章信息通知';
    this.icon = '🔔';
  }

  async execute(context) {
    const message = `文章标题: ${context.title}\n作者: ${context.author || '未知'}\n来源: ${context.url}`;
    alert(message);
  }
}
