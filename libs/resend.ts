import ThankYouTemplate from '@/components/email-templates/ThanksYouTemplate';
import {Resend} from 'resend';
import config from "@/config";
import prisma from "@/libs/prisma";
import InvoiceTemplate from "@/components/email-templates/Invoice";

class ResendService {
    private resend = new Resend(process.env.RESEND_API_KEY);

    public async sendThanksYouEmail(toMail: string) {

      try {
        const { data, error } = await this.resend.emails.send({
            from: config.resend.fromAdmin,
            to: [toMail],
            replyTo: config.resend.forwardRepliesTo,
            subject: config.resend.subjects.thankYou,
            react: ThankYouTemplate({ email: toMail }),
          });
        
          if (error) {
            throw error
          }

          return data
        } catch(e) {
          throw e
        }
    }

    public async sendInvoice(toMail: string, renderData: InvoiceGenerateData) {
        const { data, error } = await this.resend.emails.send({
            from: config.resend.fromAdmin,
            to: [toMail],
            replyTo: config.resend.forwardRepliesTo,
            subject: 'Invoice: '+renderData.id,
            react: InvoiceTemplate(renderData),
        });

        if (error) {
            throw error
        }

        return data
    }

    public async addNewEmailAddress(email: string) {
        const audience = await this.upsertAudience()
        return this.resend.contacts.create({
            email,
            unsubscribed: false,
            audienceId: audience.resend_id,
        })
    }

    private async upsertAudience() {
        try {
            const audience = await prisma.audiences.findFirst()

            if(audience) {
                return audience
            }

            const resendAudience = await this.resend.audiences.create({ name: 'Waiting List' });
            const {data: {id, name}} = resendAudience
            return prisma.audiences.create({
                data: {
                    resend_id: id,
                    name
                }
            })
        } catch (e) {
            throw e
        }
    }

}

export const resendService = new ResendService()
